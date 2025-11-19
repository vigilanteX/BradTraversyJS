let socials=['fb','x','ywitter','koogle']
// console.log(socials.__proto__)
// socials.forEach(function (item)
// {
//     console.log(item)
// })
// socials.forEach((item)=>{
//     console.log(item)
// })

//we can also pass index in callback
// socials.forEach(function (item,index)
// {
//     console.log(item,index)
// })
function social(item)
{
    console.log(item)
}
socials.forEach(social)