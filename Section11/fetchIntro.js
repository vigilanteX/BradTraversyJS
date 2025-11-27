//API CALL
// fetch('http://localhost:3000/postuser')
// .then(res => res.json())
// .then(data=>console.log(data))

//FILE READER
fetch('./res.json')
.then(res => res.json())
.then(data => console.log(data))