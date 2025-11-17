//falsy values
/*
* '' or "" empty string
* false
* zero
* undefined
*  null
* NAN
* */

const x=NaN;
if (x)
{
    console.log('x is truthy');
}
else
{
    console.log('x is falsy');
}