
const loadUser = () =>{
  fetch('https://randomuser.me/api/?results=10')
  .then(res => res.json())
  .then(data => display(data.results))
}
const display = users =>{
 const userContainer = document.getElementById('users-container')
 for(const user of users){
   console.log(user);
  const userDiv = document.createElement('div');
  userDiv.classList.add('user')
  const {id, name, gender, location, email, cell,  } = user;
  const {first, last} = name;
  userDiv.innerHTML =`
  <h3>user Name: ${first} ${last}</h3>
  <p>Email : ${email}</p>
  <p>User location : ${location.country}</p>
  `;
  userContainer.appendChild(userDiv)
 }
}

loadUser();

