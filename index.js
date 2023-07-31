//NPM files import and classes from shapes.js
const inquirer = require("inquirer");
const fs = require("fs");
const { Square, Circle, Triangle } = require("./lib/shapes");


// Inquirer prompt function 
function writeToFile(fileName, questions) {

  //Setting height and width of container
    let svgString = "";
    svgString =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    svgString += "<g>";
    svgString += `${questions.shape}`;

    // User input to adding properties to svg string
    let shapeType;
    if (questions.shape === "Triangle") {
        shapeType = new Triangle();
        svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${questions.shapeColor}"/>`;
    } else if (questions.shape === "Square") {
        shapeType = new Square();
        svgString += `<rect x="73" y="40" width="150" height="150" fill="${questions.shapeColor}"/>`;
      } else {
        shapeType = new Circle();
        svgString += `<circle cx="150" cy="115" r="80" fill="${questions.shapeColor}"/>`;
    }

    //Text allignment
    svgString += `<text x="150" y="130" text-anchor="middle" font-size="50" fill="${questions.textColor}">${questions.text}</text>`;
    svgString += "</g>";
    svgString += "</svg>";

    //Generating svg file based on name from user input using fs, no errors display the generated logo console log
    fs.writeFile(fileName, svgString, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg");
      });
}

//Inquirer prompts of text (3 characters), text color, shape and shape color
function askQuestions() {
    inquirer
      .prompt([
        {
          type: "input",
          message:
            "Enter text for the logo (Must not be more than 3 characters)",
          name: "text",
        },
        {
          type: "input",
          message:
            "Enter a text color",
          name: "textColor",
        },
        {
          type: "list",
          message: "Select a shape for the logo",
          choices: ["Square", "Circle", "Triangle"],
          name: "shape",
        },
        {
          type: "input",
          message:
            "Enter a shape color",
          name: "shapeColor",
        },
      ])
      //if user enters more than 3 characters they will receive this error log
      .then((questions) => {
        if (questions.text.length > 3) {
          console.log("Please enter no more than 3 characters");
          askQuestions();
        } else {
          writeToFile("logo.svg", questions);
        }
      });
  }

askQuestions();