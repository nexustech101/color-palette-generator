# Color Palette Generator

Color Palette Generator is a Flask-based web application that allows users to upload an image and generate a color palette from it. The application uses K-means clustering to extract the most prominent colors from the image.

## Features

- Upload images to generate color palettes
- Customize the number of colors in the palette
- Interactive UI with color preview and copy-to-clipboard functionality
- Responsive design for both desktop and mobile devices

## Installation

### Prerequisites

- Python 3.7 or higher
- pip (Python package manager)

### Steps

1. Clone the repository:
   ```
   git clone https://github.com/your-username/color-palette-generator.git
   cd color-palette-generator
   ```

2. Create a virtual environment (optional but recommended):
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   ```

3. Install the required packages:
   ```
   pip install -r requirements.txt
   ```

## Usage

1. Start the Flask application:
   ```
   python app.py
   ```

2. Open a web browser and navigate to `http://localhost:5000`

3. Use the interface to upload an image and generate a color palette:
   - Click "Choose File" to select an image from your computer
   - Adjust the "Number of colors" if desired (default is 4)
   - Click "Generate Palette" to process the image and display the results

4. Interact with the generated palette:
   - Click on any color swatch to copy its hexadecimal value to your clipboard

## Project Structure

```
color-palette-generator/
│
├── app.py                 # Main Flask application
├── img_utils.py           # Image processing utilities
├── requirements.txt       # Python dependencies
│
├── static/
│   ├── css/
│   │   └── styles.css     # CSS styles for the web interface
│   │
│   └── js/
│       └── script.js      # JavaScript for the web interface
│
└── templates/
    └── index.html         # HTML template for the web interface
```

## Technologies Used

- Backend:
  - Flask (Python web framework)
  - NumPy (Numerical computing library)
  - scikit-learn (Machine learning library for K-means clustering)
  - Pillow (Python Imaging Library)

- Frontend:
  - HTML5
  - CSS3
  - JavaScript
  - GSAP (GreenSock Animation Platform)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- [Flask](https://flask.palletsprojects.com/)
- [scikit-learn](https://scikit-learn.org/)
- [Pillow](https://python-pillow.org/)
- [GSAP](https://greensock.com/gsap/)

---

For any issues or feature requests, please open an issue in the GitHub repository.