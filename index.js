// Your code here
class Polygon {
    constructor(array) {
        this.array = array;
    }
    
    get countSides() {
        return this.array.length
    }

    get perimeter() {
        const sum = this.array.reduce(function(acc, curr){ return acc + curr }, 0);
        return sum;
    }
}

class Triangle extends Polygon {
    get isValid() {
        const side = this.array
        if (side[0] + side[1] > side[2] && side[0] + side[2] > side[1] && side[1] + side[2] > side[0]) {
            return true
        } else {
            return false
        }
    }
}

class Square extends Polygon {
    get isValid() {
        const side = this.array
        if (side[0] === side[1] && side[0] === side[2] && side[0] === side[3]) {
            return true
        } else {
            return false
        }
    }

    get area() {
        return this.array[0] * this.array[0]
    }
}

let triangle = new Triangle( [ 5, 5, 5 ] )
let triangle2 = new Triangle( [ 15, 10, 1 ] )
console.log(triangle.isValid)
console.log(triangle2.isValid)
let square = new Square( [ 5, 5, 5, 5 ] )
let square2 = new Square( [ 5, 4, 3, 2 ] )
console.log(square.isValid)
console.log(square2.isValid)
