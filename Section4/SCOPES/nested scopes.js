function first()
{
    const x=10;
    function second()
    {
        const y=10;
        console.log(x+y)

    }
    second()
}
first()

//we can access first method inside second method but vice versa is
//not possible

if (true)
{
    const x=100
    if (x==100)
    {
        const y=34;
        console.log(x,y)
    }
    //console.log(y)//ReferenceError: y is not defined

}