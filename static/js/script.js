const form = document.getElementById('upload-form');
const imageInput = document.getElementById('image');
const preview = document.getElementById('preview');
const paletteContainer = document.getElementById('palette');
const copyMessage = document.getElementById('copy-message');

imageInput.addEventListener('change', function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      preview.style.backgroundImage = `url(${e.target.result})`;
      preview.classList.remove('hidden');
    }
    reader.readAsDataURL(file);
  }
});

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const formData = new FormData(form);

  fetch('/', {
    method: 'POST',
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      if (data.palette) {
        generatePalette(data.palette);
      } else {
        alert('Error: ' + data.error);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

function generatePalette(palette) {
  paletteContainer.innerHTML = '';  // Clear any existing palette

  palette.forEach(color => {
    const colorBox = document.createElement('div');
    colorBox.className = 'color-box';
    const rgbColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    colorBox.style.backgroundColor = rgbColor;
    colorBox.textContent = rgbToHex(color[0], color[1], color[2]);
    colorBox.addEventListener('click', () => copyToClipboard(colorBox.textContent));
    paletteContainer.appendChild(colorBox);
  });
}

function rgbToHex(r, g, b) {
  return '#' + [r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('');
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    copyMessage.style.opacity = 1;
    setTimeout(() => {
      copyMessage.style.opacity = 0;
    }, 2000);
  });
}