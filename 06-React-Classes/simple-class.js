class Rectangle {
    constructor(_width, _height, _color){
        console.log("Rectangle constructor");

        this.width = _width;
        this.height = _height;
        this.color = _color;
    }

    getArea(){
        return this.width * this.height;
    }

}

const newRectangle = new Rectangle(10,20, "red");

console.log(newRectangle.getArea());