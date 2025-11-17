//falsy values
/*
* '' or "" empty string
* false
* zero
* undefined
*  null
* NAN
* */


//truthy
/*
* [] empty array
* {} empty object
* function {} empty fn
* everything else is not falsy
*/
const x=function (){};
if (x)
{
    console.log('x is truthy');
}
else
{
    console.log('x is falsy');
}