//console.log(window)// global object containing all methods
//alert('meow')//works as this method alert is in global scope
//alert is inside window object

//ANYTHING NOT INSIDE ANY BLOCK OR FUNCTION IS GLOBAL SCOPE


//function scope:var declared inside fn cannot be accessible outside
const a=44
const x=1000;
function print()
{
    const x=12
    console.log(x)//always take inner block scope priority-var shadowing
    console.log(a)

}
print()