# Glaucoma-Detection-using-Transfer-Learning

<br>
<div align="center">

![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NumPy](https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white)
![Pandas](https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white)
![scikit-learn](https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white)
![Keras](https://img.shields.io/badge/Keras-%23D00000.svg?style=for-the-badge&logo=Keras&logoColor=white)
![TensorFlow](https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)
![Anaconda](https://img.shields.io/badge/Anaconda-%2344A833.svg?style=for-the-badge&logo=anaconda&logoColor=white)
![Jupyter Notebook](https://img.shields.io/badge/jupyter-%23FA0F00.svg?style=for-the-badge&logo=jupyter&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

<br>

[![Open Source](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/iamwatchdogs?tab=repositories&q=&type=public&language=&sort=)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/iamwatchdogs/Glaucoma-Detection-using-Transfer-Learning/pulls)
[![GitHub issues](https://img.shields.io/github/issues/iamwatchdogs/Glaucoma-Detection-using-Transfer-Learning.svg)](https://github.com/iamwatchdogs/Glaucoma-Detection-using-Transfer-Learning/issues)
[![GitHub pull-requests merged](https://badgen.net/github/merged-prs/iamwatchdogs/Glaucoma-Detection-using-Transfer-Learning)](https://github.com/iamwatchdogs/Glaucoma-Detection-using-Transfer-Learning.js/pulls?q=is%3Amerged)
[![GitHub release](https://img.shields.io/github/release/iamwatchdogs/Glaucoma-Detection-using-Transfer-Learning)](https://GitHub.com/iamwatchdogs/Glaucoma-Detection-using-Transfer-Learning/releases/)
[![License](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)](./LICENSE)

</div>
<br>

## About Project:

The Glaucoma-Detection-using-Transfer-Learning _A.K.A_ GlaucoDetect is a full stack project with Machine Learning at its core. This project aims to help people get a report about the condition of their eyes and the possibility of having glaucoma eye disease. The ML model is trained using the concepts of transfer learning techniques _(where we use the pre-trained models to extract the features to help us train the model without worrying about overfitting comparatively smaller datasets)_. The core tech stack used to build this project is Python, JavaScript and its libraries and framework. The frontend is built using the React library and the backend is built using the Flask framework.

## Setting up the project

There are two parts of the project, one which contains the algorithm used to train the model and the other uses the exported model as a part of the backend in the web application to interact with end users. But here some common parts which you can get started with...

- Make sure you have [git](https://git-scm.com/ "download git"), [python](https://www.python.org/ "download python"), any conda environment _(i.e., [miniconda](https://docs.anaconda.com/free/miniconda/index.html "download miniconda") or [anaconda](https://www.anaconda.com/anaconda-navigator "download anaconda navigator"))_ and [node.js](https://nodejs.org/en "download node.js") installed within your system.
- Now [fork the repository](https://github.com/iamwatchdogs/Glaucoma-Detection-using-Transfer-Learning/fork "fork the repo") and clone it to your local machine by using the following command.
```bash
git clone https://github.com/<your-username>/Glaucoma-Detection-using-Transfer-Learning.git
```
- Open the cloned directory and set up the conda environments using the `enviroment.yml` _(more details down below)_ and download the required `node_modules` using node _(more details down below)_.

### For ML training

All the ML model-related files including the **dataset** and **exported model** are present within the [`model`](model/) directory of the project. To set up Jupyter Notebook, you either have to use [Google Colab](https://colab.research.google.com/ "open Google Colab") or your local system.

- If you want to use it through Google Colab, you can just download the Jupyter Notebook present within the `model` directory named [glaucoma-detection-using-transfer-learning.ipynb](model/glaucoma-detection-using-transfer-learning.ipynb "goto glaucoma-detection-using-transfer-learning.ipynb") and open it through Google Colab your account.

> [!NOTE]
> Please note if you're using Google Colab, please don't use GPU or TPU runtime as train the model from scratch take a lots of time and compute power which might exhaust your daily limit thus leading to termination of your runtime and all the progress that your model made.

- If you wish to proceed with your local system, you can just open it up using the Jupyter Notebook that comes along with the complete installation of the **Anaconda** environment.
- If you're using the **Miniconda** instead of the complete **Anaconda** environment, you can make use of the exported [environment.yml](model/environment.yml) configuration to set up the same environment that I used to train the model. You can use the following command to set up the environment within your system:
```bash
# setup the environment using conda within your system.
conda env create -f model/environment.yml

# activate your the environment to train the model.
conda activate glaucoma-detection
```

> [!TIP]
> - If you're using VSCode to open and train the model within the jupyter notebook, make sure to select the interpret using `ctrl` + `shift` + `p` (or) `cmd` + `shif` + `p`, then type "select python interpreter" and then select the python interpreter from `glaucoma-detection` miniconda environment.
> - Do the same while selecting the runtime environment for the jupyter notebook too.

### For Web Application

The files related to the web application are located within the root of the project directory. For setting up this project you're going to need **node.js** and **python** _(miniconda is recommended)_.

- You can start initializing the react application using the following command:
```node
npm install
```
- As for the backend, you can set up the miniconda environment using the `environment.yml` file present within the `server` directory.
```bash
# setup the environment using conda within your system.
conda env create -f server/environment.yml

# activate your the environment to host the server.
conda activate glaucoma-detection-server
```
- If you're not using miniconda environment, then you still install dependencies using the `pip` package manager _(which is not recommended)_. It's recommended to have some kind of virtual environment like miniconda but you can still use other virtual environments like `pipenv` or `virtualenv`. Here are the required dependencies for setting up virtual dependencies.
```
numpy=1.23.5
scikit-learn=1.3.0
scikit-image=0.22.0
tensorboard=2.12.1
flask=2.2.5
flask_cors=3.0.10
```
- After setting up the required environment, you can run up the servers for both the React app and Flask applications you can use the following commands:
```bash
# Run the server for react app
npm run dev

# In a new terminal, run the flask server
python server/server.py
```

# Contributing

I welcome anyone who finds my project interesting and willing to contribute to this project. Please make sure to set up the project with your system and try it out at least once, even before you start contributing to the project. If you face any kind of issue while setting up the project within your system, you can raise a ticket by creating a new discussion within the [discussion section](https://github.com/iamwatchdogs/Glaucoma-Detection-using-Transfer-Learning/discussions "goto discussion section") of the repo. 

>[!IMPORTANT]
> - Please create a new issue in the [issue section](https://github.com/iamwatchdogs/Glaucoma-Detection-using-Transfer-Learning/issues "goto issue section") and get assigned even before you start contributing to the project. By this way you can let others know that you're out of a feature/bug which was already recorded, this helping us maintain the project better.
> - This is the reason, why any PR made without a issue tag will be rejected and closed unless or until there a new issue has been created and linked with the respective issue.

## Output

<div align="center">

<img width="1680" alt="image" src="https://github.com/iamwatchdogs/Glaucoma-Detection-using-Transfer-Learning/assets/49478000/3c00d285-7dd7-486b-8eb2-1fb35758e102">

</div>