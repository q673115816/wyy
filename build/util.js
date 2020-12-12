const path = require('path');

const root = path.join(__dirname, '../');
const src = path.join(__dirname, '../src');
const img = path.join(__dirname, '../src/assets/images');
const dist = path.join(__dirname, '../dist');

module.exports = {
  root, src, dist, img,
};