class Rectangle{

    x;
    y;
    length;
    width;

    constructor(x, y, length, width){
        this.x = x;
        this.y = y;
        this.length = length;
        this.width = width;
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }

    getLength(){
        return this.length;
    }

    getWidth(){
        return this.width;
    }

    setX(x){
        this.x = x;
    }

    setY(y){
        this.y = y;
    }

    setLength(length){
        this.length = length;
    }

    setWidth(width){
        this.width = width;
    }

    calculateArea(){
        return this.width*this.length;
    }

    calculateSurface(){
        return 2*(this.width + this.length);
    }
}