from Model import predict

def display_prediction(sample_data_set=None):

    if sample_data_set is None:
        sample_data_set = [
            ('model/dataset/Fundus_Scanes_Sorted/Train/Glaucoma_Negative/001.jpg', 0.7097, 0, 0, 0),
            ('model/dataset/Fundus_Scanes_Sorted/Train/Glaucoma_Positive/036.jpg', 0.5097, 0, 0, 1),
        ]

    for data in sample_data_set:
        image_path, exp_cdr, type, set, actual = data
        prediction = predict(image_path, exp_cdr, type, set)
        print(f"\nActual: {actual}, Prediction: {prediction}\n")


if __name__ == '__main__':
    display_prediction()
