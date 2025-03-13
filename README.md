# Express Project CLI Generator

This CLI tool scaffolds a modern Node.js/Express project with integrated **MongoDB**, **Mongoose**, and **dotenv** support. It interactively creates a project folder with a pre-configured structure including folders for routes, config, controllers, views, and models, along with essential files such as the main app file, `.env`, and `package.json`.

## Table of Contents
- [Features](#features)
- [Built With](#built-with)
- [Prerequisites](#prerequisites)
- [Installation and Usage](#installation-and-usage)
- [Environment Variables](#environment-variables)
- [Contact](#contact)

## Features

- **Interactive CLI**: Prompts for the project name (used for both folder and package.json) and the main file name.
- **Automatic Project Structure**: Generates a standardized structure including folders for routes, config, controllers, views, and models.
- **Pre-configured Setup**: Creates an app file with Express server setup, a sample MongoDB connection file, a simple controller, view, and model.
- **Environment Setup**: Generates a `.env` file with default values for `MONGO_URI` and `PORT`.
- **Easy Start**: The generated `package.json` includes a start script to run the app immediately.

<p align="right">(<a href="#table-of-contents">back to top</a>)</p>

## Built With

This CLI tool was built with the following technologies:

* ![Node.js](https://img.shields.io/badge/-Node.js-green)

<p align="right">(<a href="#table-of-contents">back to top</a>)</p>

## Prerequisites

Before using this CLI tool, please ensure you have installed:

- **Node.js** (version 14.x or higher)
- **npm** (Node Package Manager)

<p align="right">(<a href="#table-of-contents">back to top</a>)</p>

## Installation and Usage

### Step 1: Install the CLI Tool Globally
```bash
npm install -g amirexa
```

### Step 2: Run the CLI Tool
Simply run the command:
```bash
create-app
```
The tool will prompt you for the project name (used both as the folder name and in `package.json`) and the main file name (e.g., `app`). It will then generate the project structure in a new folder.

### Step 3: Navigate and Install Dependencies
After the project is generated, navigate to your project folder:
```bash
cd your-project-name
npm install
```

### Step 4: Run Your Project
Start your project with:
```bash
npm start
```
Then open your browser and go to `http://localhost:3000` to view your application.

<p align="right">(<a href="#table-of-contents">back to top</a>)</p>

## Environment Variables

Once the project is generated, a `.env` file is created with default values. Update it with your MongoDB connection string and desired port:
```bash
MONGO_URI=your_mongodb_connection_string
PORT=3000
```
<p align="right">(<a href="#table-of-contents">back to top</a>)</p>

## Contact

For any questions or issues regarding this CLI tool, please reach out:

* Email: AmirrezaAhmadi.GH@Gmail.com
* Telegram: https://t.me/AmirrezaDevelop
* Instagram: https://www.instagram.com/codewithamirreza
* github Link: https://github.com/AmirrezaAhmadi

<p align="right">(<a href="#table-of-contents">back to top</a>)</p>