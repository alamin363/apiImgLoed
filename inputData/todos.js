function loadTodos(){
 fetch('https://jsonplaceholder.typicode.com/todos')
 .then(res => res.json())
 .then(data => displayTodos(data))
}
function displayTodos(datas){
  console.log(datas);
  // get the container >>
  const todoContainer =  document.getElementById('todos-container')
 for(const todo of datas){
  // create the element >>
   const todoDiv = document.createElement('div')
  //  set iner text or inner html
   todoDiv.innerHTML = `
   <h3>titel: ${todo.title}</h3>
   <p>user ${todo.userId}</p>
   <p>Is  ${todo.completed === true ? 'complate' : 'Notcomplete' }</p>
   
   `
  //  append childe 
  todoContainer.appendChild(todoDiv)
 }
}
loadTodos()
 