//function declaration-hoisting is applicable
function adddollar()
{
    console.log('fn dec')
}
adddollar();

//function expression-hoisting is not applicable
const x=function c()
{
    console.log('fn exp')
}
x()