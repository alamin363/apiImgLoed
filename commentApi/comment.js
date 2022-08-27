function inputCommennt(){
  fetch('https://jsonplaceholder.typicode.com/comments')
  .then(res => res.json())
  .then(inp => displayShow(inp))
}

function displayShow(obj){
  const section = document.getElementById('display-comment')
 for(const valus of obj){
  const {postId, id, email, name, body  } = valus;
  const div = document.createElement('div')
  div.classList.add('model')
  div.innerHTML = `
  <h3>Id is: ${id}</h3>
  <h2>name : ${name}</h2>
  <h2>email : ${email}</h2>
  <h3>commint is: ${body}</h3>
  `;
  section.appendChild(div)
 }
}
inputCommennt()