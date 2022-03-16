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
    try {
      let trianglePerimeter = this.a + this.b + this.c;    
      return trianglePerimeter;
    } catch(err) {
      return "Ошибка! Треугольник не существует";
    }
  }

  getArea() {
    try {
      let halfTrianglePerimeter = this.getPerimeter() / 2;
      let triangleArea = Math.sqrt(halfTrianglePerimeter * (halfTrianglePerimeter - this.a) * (halfTrianglePerimeter - this.b) * (halfTrianglePerimeter - this.c));
      return Number(triangleArea.toFixed(3));
    } catch(err) {
      return "Ошибка! Треугольник не существует";
    }
  }
}

function getTriangle(a, b, c) {
  try {
    let triangle = new Triangle(a, b, c);
    return triangle;
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