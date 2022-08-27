function loadUser(){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => displayPosts(data))
}
function displayPosts(posts){
  const postContainer = document.getElementById('post-container')
 for(const post of posts){
  const div = document.createElement('div')
  div.classList.add('postes')
  // console.log(post);
  div.innerHTML = `
  <h5>User: ${post.userId}</h5>
  <h5>post: ${post.title}</h5>
  <p>post Description: ${post.body}</p>
  `;
  postContainer.appendChild(div)
 }
}

loadUser()
