function parseCount(valueToParse) {
  let parsedValue = Number.parseInt(valueToParse);
  if (isNaN(parsedValue)) {
    throw new Error("Невалидное значение");
  } else {
    return parsedValue;
  }
}

function validateCount(valueToParse) {
  try {
    return parseCount(valueToParse);
  } catch(err) {
    return err;
  } 
}

class Triangle {
  constructor(a, b, c) {
    if (a + b < c || a + c < b || b + c < a) {
      throw new Error("Треугольник с такими сторонами не существует");
    } else {
      this.a = a;
      this.b = b;
      this.c = c;
    }
  }

  getPerimeter() {
    let trianglePerimeter = this.a + this.b + this.c;    
    return trianglePerimeter;
  }

  getArea() {
    let halfTrianglePerimeter = this.getPerimeter() / 2;
    let triangleArea = Math.sqrt(halfTrianglePerimeter * (halfTrianglePerimeter - this.a) * (halfTrianglePerimeter - this.b) * (halfTrianglePerimeter - this.c));
    return Number(triangleArea.toFixed(3));
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch(err) {
    let triangle = {
      getArea() {
        return "Ошибка! Треугольник не существует";
      },
      getPerimeter() {
        return "Ошибка! Треугольник не существует";
      }
    };
    return triangle;
  }
}