import os
import logging
from flask import Flask, render_template, send_from_directory

# Configure logging
logging.basicConfig(level=logging.DEBUG)

# Create Flask app
app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET", "default_secret_key")

@app.route('/')
def index():
    """Render the main page of the tutorial website"""
    return render_template('index.html')

@app.route('/diagram')
def diagram():
    """Render just the diagram page for testing"""
    return render_template('diagram.html')

@app.route('/images/<path:filename>')
def serve_image(filename):
    """Serve images directly"""
    return send_from_directory('static/images', filename)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
