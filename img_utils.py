import numpy as np
from typing import List
from sklearn.cluster import KMeans
from PIL import Image


def get_color_palette(image: Image.Image, num_colors: int) -> List[List[int]]:
    """Extracts a color palette from an image object using K-Means clustering."""

    # Convert the image to a numpy array
    image_array = np.array(image)

    # Reshape the array to a 2D array of pixels
    pixels = image_array.reshape(-1, 3)

    # Perform K-Means clustering
    kmeans = KMeans(n_clusters=num_colors)
    kmeans.fit(pixels)

    # Get the RGB values of the cluster centers
    palette = kmeans.cluster_centers_

    # Convert the palette to integers
    palette = palette.astype(int)

    return palette
