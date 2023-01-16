'use strict'
const jsdoc2md = require('jsdoc-to-markdown');
const fs = require('fs')
const path = require('path')

/* input and output paths */
const inputDir = path.resolve(__dirname, 'docs/');
const inputFile = path.resolve(inputDir, '**/*.js');
const outputDir = path.resolve(__dirname, 'build');

/* get template data */
const templateData = jsdoc2md.getTemplateDataSync({ files: inputFile })

const contents = {};

function registerContents(path) {
  path
    .split('/')
    .reduce((parent, item, i, arr)=> {
      if (!parent[item]) {
        if (i !== arr.length - 1) {
          parent[item] = {};
        } else {
          parent[item] = undefined;
        }
      }

      return parent[item];
    }, contents);
}

/* reduce templateData to an array of class names */
const classNames = templateData.reduce((classNames, identifier) => {
  if (identifier.kind !== 'class') return classNames;

  let path = identifier.meta.path
    .replace(inputDir, '')
    .replace('\\', "") + '/' + identifier.name;

  path = path.replace(/^\//, '');


  registerContents(path)

  classNames.push({
    name: identifier.name,
    path,
  });

  return classNames;
}, []);


/* create a documentation file for each class */
classNames.forEach(className => {
  const template = `{{#class name="${className.name}"}}{{>docs}}{{/class}}`
  console.log(`rendering ${className.name}, template: ${template}`)

  const dest = path.resolve(outputDir, className.path + '.md');
  console.log(dest);

  const targetFolder = dest.split(/(\\|\/)/);
  targetFolder.pop();

  fs.mkdirSync(targetFolder.join('/'), { recursive: true });

  const output = jsdoc2md.renderSync({ data: templateData, template: template })
  fs.writeFileSync(dest, output);
});


const contentsLines = [];

function generateContentsLines(object, folder = '/build/', level = 0) {
  Object
    .entries(object)
    .forEach(([key, obj]) => {
      const indent = new Array(level * 2).fill(' ').join('');
      const ext = !obj ? '.md' : '';
      contentsLines.push(indent + '- ' + `[${key}](${folder + key + ext})`);

      if (obj) {
        generateContentsLines(obj, folder + key + '/', level + 1);
      }
    });
}

generateContentsLines(contents);

let readmeTemplate = fs.readFileSync('readme-template.md').toString();

readmeTemplate = readmeTemplate.replace('{{ CONTENTS }}', contentsLines.join('\n'));

fs.writeFileSync('build/readme.md', readmeTemplate);
