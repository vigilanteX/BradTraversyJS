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