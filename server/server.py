import os
from flask import Flask, request, jsonify
from flask_cors import CORS

from Model import predict

app = Flask(__name__)
CORS(app)

# Body key mapping
BODY_KEYS = {
    'expcdr': 'ExpCDR',
    'type': 'EyeType',
    'set': 'EyeSet',
    'img': 'ImgFile'
}

@app.route('/classify')
def classify_page():
    return '<h1>Only POST requests are allowed on this endpoint !!!...</h1>'

@app.route('/classify', methods=['POST'])
def classify():

    # Log the request
    app.logger.info("Received request: %s", request)
    app.logger.info("Request Header: %s", request.headers)
    app.logger.info("Request Body: %s", request.form.keys())

    # extracting data from the request
    exp_cdr = float(request.form.get(BODY_KEYS['expcdr']))
    type = int(request.form.get(BODY_KEYS['type']))
    set = int(request.form.get(BODY_KEYS['set']))
    app.logger.info("Extracted non-file attributes: \n%s", str({"expcdr": exp_cdr, "type": type, "set": set}))

    # save image to upload folder
    os.makedirs('uploads', exist_ok=True)
    filepath = request.files[BODY_KEYS['img']]
    filepath.save('uploads/image.jpg')
    app.logger.info("Saved Image at: %s", 'uploads/image.jpg')

    # Using the Model
    result = str(predict('uploads/image.jpg', exp_cdr, type, set))
    app.logger.info("Model successfully predicted: %s", result)

    # Clean up
    os.remove('uploads/image.jpg')
    app.logger.info("Deleted image: %s", 'uploads/image.jpg')
    app.logger.info("Sending Response back to the client...")
    return jsonify({"prediction": result})


if __name__ == '__main__':
    os.makedirs('uploads', exist_ok=True)
    app.run(debug=True, host='127.0.0.1', port=5000)
    os.rmdir('uploads')