class Circle {
    radius;
    color;

    constructor(radius, color){
        this.radius = radius;
        this.color = color;
    }

    
    getRadius(){
        return this.radius;
    }

    getColor(){
        return this.color;
    }

    setRadius(radius){
        this.radius = radius;
    }

    setColor(color){
        this.color = color;
    }

    getArea(){
        return Math.PI*(this.radius**2);
    }
}