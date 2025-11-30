function Rectangle(name, height, width) {
    this.name = name;
    this.width = width;
    this.height = height;
}

Rectangle.prototype.area = function () {
    return this.height * this.width;
}
Rectangle.prototype.isEqual = function () {
    return this.height === this.width;
}
Rectangle.prototype.perimeter = function () {
    return 2 * (this.height + this.width)
}


let rect1 = new Rectangle("RECT", 181, 181);
console.log(Object.getPrototypeOf(rect1));
console.log(rect1.area())
console.log(rect1.isEqual())
console.log(rect1.perimeter())


