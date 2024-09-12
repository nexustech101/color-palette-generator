from flask import Flask, render_template, request, jsonify
from PIL import Image
import io
from img_utils import get_color_palette

app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def color_palette():
    if request.method == 'POST':
        # Check if an image file is in the request
        if 'image' not in request.files:
            return jsonify({"error": "No image file provided"}), 400

        file = request.files['image']

        try:
            # Open the image file without calling .read(), directly using PIL
            image = Image.open(file.stream)

            # Get the number of colors from the form data
            num_colors = int(request.form.get('num_colors', 4))

            # Generate the color palette
            palette = get_color_palette(image, num_colors)

            # Convert the palette to a list for JSON serialization
            palette_list = palette.tolist()

            return jsonify({"palette": palette_list}), 200

        except Exception as e:
            return jsonify({"error": f"Error processing image: {str(e)}"}), 500

    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=False)
