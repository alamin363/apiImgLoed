// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

// same new styling 

// const url ="https://jsonplaceholder.typicode.com/todos/1"
// fetch(url)
// .then(response => response.json())
// .then(json => console.log(json))

// same with function

function loadData(){
  const url ="https://jsonplaceholder.typicode.com/todos/1"
fetch(url)
.then(response => response.json())
.then(json => console.log(json))
}

