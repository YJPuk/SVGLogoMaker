//Import Shape Classes
const { Square, Circle, Triangle } = require("./shapes.js");

describe("Square test", () => {
    test("test Square with black background white text", () => {
      const shape = new Square();
      shape.setColor("black");
      expect(shape.render()).toEqual(
        '<rect x="73" y="40" width="150" height="150" fill="black" />'
      );
    });
});

describe("Circle test", () => {
    test("test Circle with Blue background", () => {
      const shape = new Circle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        '<circle cx="150" cy="115" r="80" fill="blue" />'
      );
    });
  });

describe("Triangle test", () => {
    test("test Triangle with Red background", () => {
      const shape = new Triangle();
      shape.setColor("red");
      expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="red" />'
      );
    });
  });