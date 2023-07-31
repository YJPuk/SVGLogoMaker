const inquirer = require('inquirer');
const { writeFile } = require("fs/promises");
const SVG = require("./svg.js");

const { Square, Circle, Triangle } = require("./lib/shapes.js");

class CLI {
    run() {
        return inquirer
        .prompt()
        .then(({ text, textColor, shapeType, shapeColor }) => {})
        .then(() => {})
        .catch(() => {});
    }
}