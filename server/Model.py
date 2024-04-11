import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import load_img, img_to_array
from skimage.transform import resize


def predict(image_path, exp_cdr, type, set):

    EXPORTED_MODEL = load_model("model/exports/glaucoma_detection_model_vgg.h5")
    IMAGE_TARGET_SIZE = (150, 150)

    def preprocess_image(image_path, target_size):
        image = load_img(image_path)
        image = img_to_array(image)
        image = image / 255.0
        image = resize(image, target_size)
        return image


    def preprocess_attributes(exp_cdr, type, set):
        processed_attributes = [exp_cdr, type, set]
        return processed_attributes

    preprocessed_image = preprocess_image(image_path, IMAGE_TARGET_SIZE)
    preprocessed_attributes = preprocess_attributes(exp_cdr, type, set)

    prediction = EXPORTED_MODEL.predict(
        [np.array([preprocessed_image]), np.array([preprocessed_attributes])])

    return prediction[0][0]