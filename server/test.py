import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import load_img, img_to_array
from skimage.transform import resize

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


def display_prediction(image_path, exp_cdr, type, set, actual):
    preprocessed_image = preprocess_image(image_path, IMAGE_TARGET_SIZE)
    preprocessed_attributes = preprocess_attributes(exp_cdr, type, set)

    prediction = EXPORTED_MODEL.predict(
        [np.array([preprocessed_image]), np.array([preprocessed_attributes])])
    print(f"\nActual: {actual}, Prediction: {prediction[0][0]}\n")


sample_data_set = [
    ('model/dataset/Fundus_Scanes_Sorted/Train/Glaucoma_Negative/001.jpg', 0.7097, 0, 0, 0),
    ('model/dataset/Fundus_Scanes_Sorted/Train/Glaucoma_Positive/036.jpg', 0.5097, 0, 0, 1),
]

for data in sample_data_set:
    image_path, exp_cdr, type, set, actual = data
    display_prediction(image_path, exp_cdr, type, set, actual)
