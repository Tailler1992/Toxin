const fs = require('fs');
const path = require('path');

const pagesPaths =  path.join(__dirname, "../src/pages");
const pagesName = fs.readdirSync(pagesPaths);

const entryPoints = pagesName.map(page => (
  {[page]: `${pagesPaths}/${page}/${page}.js`,}
));

const optionsHtmlPlugin = pagesName.map(page => (
  {
    template: `${pagesPaths}/${page}/${page}.pug`,
    filename: `${page}.html`,
    chunks: [`${page}`]
  }
));

const result = {};

result.entry = Object.assign({}, ...entryPoints);
result.pages = optionsHtmlPlugin;

module.exports = result;
