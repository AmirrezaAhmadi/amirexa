function getMainFileContent() {
    return `const express = require('express');
const app = express();

// Load environment variables
require('dotenv').config();

// Database setup
const connectDB = require('./config/db');
connectDB();

// Middleware for parsing JSON
app.use(express.json());

// Setting up routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(\`Server is running on port \${port}.\`);
});`;
  }
  
  function getRoutesContent() {
    return `const express = require('express');
const router = express.Router();

// Main controller
const mainController = require('../controllers/mainController');

router.get('/', mainController.home);

module.exports = router;`;
  }
  
  function getConfigContent() {
    return `const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB.');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;`;
  }
  
  function getControllerContent() {
    return `// Reference to the model
const Model = require('../models/model');

exports.home = (req, res) => {
  res.send('Welcome to the homepage.');
};`;
  }
  
  function getViewContent() {
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Express App</title>
</head>
<body>
  <h1>Welcome to Express App</h1>
</body>
</html>`;
  }
  
  function getModelContent() {
    return `const mongoose = require('mongoose');

const ModelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Model', ModelSchema);`;
  }
  
  function getEnvContent() {
    return `MONGO_URI=mongodb://localhost:27017/yourdbname
PORT=3000`;
  }

  function getGitignoreContent() {
    return `# Node.js dependencies
  node_modules/
  .env
  
  # Logs
  npm-debug.log*
  yarn-debug.log*
  yarn-error.log*
  pnpm-debug.log*
  `;
  }
  
  function getPackageJsonContent(projectName, mainFile) {
    return JSON.stringify({
      name: projectName,
      version: "1.0.0",
      main: mainFile,
      scripts: {
        start: `nodemon ${mainFile}`
      },
      dependencies: {
        express: "^4.18.2",
        mongoose: "^7.0.0",
        dotenv: "^16.0.0"
      }
    }, null, 2);
  }
  
  module.exports = {
    getMainFileContent,
    getRoutesContent,
    getConfigContent,
    getControllerContent,
    getViewContent,
    getModelContent,
    getEnvContent,
    getPackageJsonContent,
    getGitignoreContent
  };  