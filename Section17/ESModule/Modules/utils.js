//case1 single fn export
// function capitalize(str) {
//     return str.toUpperCase();
// }
// export default capitalize

//case2 2 fn export
function A()
{
    console.log("A");
}
function B()
{
    console.log("B");
}

export {A,B}