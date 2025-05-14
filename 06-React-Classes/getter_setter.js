class Square {
    constructor(_width){
        this.width = _width;
        this.height = _width;
    }

    getArea(){
        return this.width * this.height;
    }
    
    get area(){
        return this.width * this.height;
    }
    set area(newArea){
        this.width = Math.sqrt(newArea);
        this.height = Math.sqrt(newArea);
    }
}

console.log("Square constructor");
const newSquare = new Square(10);
//console.log(newSquare.getArea());
console.log(newSquare.area);

newSquare.area = 144;
console.log(newSquare.width);