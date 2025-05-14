class Square {
    constructor(_side){
        this.side = _side;
    }

    getArea() {
        return this.side * this.side;
    }

    static calArea(side){
        return side * side;
    }
}

const newSquare = new Square(10);
console.log(newSquare.getArea());

console.log(Square.calArea(12));
