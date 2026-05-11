from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__)

MEDIA_FOLDER = "media"

IMAGE_EXTENSIONS = (
    ".png",
    ".jpg",
    ".jpeg",
    ".webp"
)

VIDEO_EXTENSIONS = (
    ".mp4",
    ".mov",
    ".mkv",
    ".webm"
)


@app.route('/media/<path:filename>')
def media(filename):
    return send_from_directory(MEDIA_FOLDER, filename)


@app.route('/')
def home():

    images = []
    videos = []

    if os.path.exists(MEDIA_FOLDER):

        files = sorted(os.listdir(MEDIA_FOLDER))

        for file in files:

            lower = file.lower()

            if lower.endswith(IMAGE_EXTENSIONS):
                images.append(file)

            elif lower.endswith(VIDEO_EXTENSIONS):
                videos.append(file)

    return render_template(
        'index.html',
        images=images,
        videos=videos
    )


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=10000)