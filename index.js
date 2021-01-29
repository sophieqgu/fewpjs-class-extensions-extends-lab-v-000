// Your code here
class Polygon {
  constructur(...sides) {
    this.sides = sides;
  }

  get countSides() {
    return sides.length;
  }

  get perimeter() {
    int sum = 0;
    for (int i = 0; i < sides.length; i++) {
      sum += sides[i];
    }
    return sum;
  }
}

class Triangle extends Polygon {
  
}
