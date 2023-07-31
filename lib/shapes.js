// Shape constructor
class Shape {
    constructor() {
      this.color = "";
    }
    setColor(colorVar) {
        this.color = colorVar;
    }
}

// Square propeties
class Square extends Shape {
    render() {
      return `<rect x="73" y="40" width="150" height="150" fill="${this.color}" />`;
    }
}

//Circle properties
class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
}

//Triangle properties
class Triangle extends Shape {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

//Export shape classes
module.exports = { Square, Circle, Triangle };
  