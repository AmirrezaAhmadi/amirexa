#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { Command } = require('commander');
const templates = require('./templates');

const program = new Command();

program
  .version('1.0.0')
  .description('Generate an Express.js project structure')
  .argument('<projectName>', 'Project name')
  .option('-m, --main <filename>', 'Main file name', 'app')
  .action((projectName, options) => {
    projectName = projectName.trim();
    if (!projectName) {
      console.error('❌ Project name cannot be empty.');
      process.exit(1);
    }

    if (!fs.existsSync(projectName)) {
      fs.mkdirSync(projectName);
      console.log(`📁 Project "${projectName}" created.`);
    } else {
      console.log(`⚠️ Project "${projectName}" already exists.`);
    }

    process.chdir(projectName);

    const mainFile = `${options.main}.js`;
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

    console.log(`✅ Project setup complete.`);
  });

program.parse(process.argv);