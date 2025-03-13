#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const templates = require('./templates');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the project name: ', (projectName) => {
  projectName = projectName.trim();
  if (!projectName) {
    console.error('❌ Project name cannot be empty.');
    rl.close();
    return;
  }

  if (!fs.existsSync(projectName)) {
    fs.mkdirSync(projectName);
    console.log(`📁 Project "${projectName}" created.`);
  } else {
    console.log(`⚠️ Project "${projectName}" already exists.`);
  }

  process.chdir(projectName);

  rl.question('Enter the main file name (default: app): ', (mainFileName) => {
    const mainFile = `${(mainFileName.trim() || 'app')}.js`;
    const folders = ['routes', 'config', 'controllers', 'views', 'models'];

    folders.forEach(folder => {
      if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder);
        console.log(`📂 Folder "${folder}" created.`);
      }
    });

    fs.writeFileSync(mainFile, templates.getMainFileContent());
    fs.writeFileSync(path.join('routes', 'index.js'), templates.getRoutesContent());
    fs.writeFileSync(path.join('config', 'db.js'), templates.getConfigContent());
    fs.writeFileSync(path.join('controllers', 'mainController.js'), templates.getControllerContent());
    fs.writeFileSync(path.join('views', 'index.html'), templates.getViewContent());
    fs.writeFileSync(path.join('models', 'model.js'), templates.getModelContent());
    fs.writeFileSync('.env', templates.getEnvContent());
    fs.writeFileSync('package.json', templates.getPackageJsonContent(projectName, mainFile));
    fs.writeFileSync('.gitignore', templates.getGitignoreContent());

    console.log(`✅ Project setup complete.`);
    rl.close();
  });
});
