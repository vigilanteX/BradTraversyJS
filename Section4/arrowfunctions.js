//function declaration
function add(x,y)
{
    return x+y
}

//arrow fn       => FAT ARROW
let addarrowfn=(x,y)=>{
    return x+y
}
console.log(addarrowfn(1,2))

//arrow fn cleaner way
let addarrowfncleaner=(x,y)=>x+y;
console.log(addarrowfncleaner(1,2))

//in case of single param () is not required
let addarrowfncleaner3=name=>`hello from ${name}`;
console.log(addarrowfncleaner3('aman'))


//returning object special care arrow fn add object in ()
let addarrowfncleaner4=_=>({name:"Aman"});
console.log(addarrowfncleaner4())