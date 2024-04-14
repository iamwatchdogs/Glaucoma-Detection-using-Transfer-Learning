import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import load_img, img_to_array
from skimage.transform import resize


def preprocess_image(image_path, target_size=(150, 150)):
    image = load_img(image_path)
    image = img_to_array(image)
    image = image / 255.0
    image = resize(image, target_size)
    return image

def predict(image, exp_cdr, type, set):

    EXPORTED_MODEL = load_model("model/exports/glaucoma_detection_model_vgg.h5")
    IMAGE_TARGET_SIZE = (150, 150)

    # Checking if it's a path or preprocessed image
    if '/' in image or '\\' in image:
        image = preprocess_image(image, IMAGE_TARGET_SIZE)
    attributes = [exp_cdr, type, set]

    prediction = EXPORTED_MODEL.predict([np.array([image]), np.array([attributes])])

    return prediction[0][0]