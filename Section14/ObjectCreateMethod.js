const rect = {
    area: function () {
        return this.width * this.height;
    },
    perimeter: function () {
        return 2 * (this.height + this.width)
    },
    isEqual: function () {
        return this.height === this.width;
    }
}

//way1
let x=Object.create(rect,{height:{value:10},width:{value:100}});
console.log(x);



//way2 to initialize value in object literal
// rect.height = 10;
// rect.width = 10;
// console.log(rect);

