if (true)
{
    console.log('this is 1st true')
}

if (true)
{
    console.log('this is 2nd true')
}

if (true)
{
    let a=12;
    const b=13;
    var c=14;
}
// console.log(c)
// console.log(b)
// console.log(a)



//shorthand
let l=10;
let m=10;
if (l>m)console.log('l>m')
else if (l==m)console.log('l==m'),
    console.log('lem2')
else console.log('lem3')


//switch
//case 1 normal exact value compare
let age=30;
switch (age)
{
    case 10:
        console.log('10')
        break;
    case 20:
        console.log('20')
        break;
    case 30:
        console.log('30')
        break;
    default:
        console.log('default')
}

//case2 condisitons in cases
switch (true)
{
    case age<18:
        console.log('18')
        break;
    case age<=30:
        console.log('30')
        break;
    case age>=40:
        console.log('40')
        break;
    default:
        console.log('default switch 2')

}