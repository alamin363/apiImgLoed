
function inpuValue(){
  fetch('https://jsonplaceholder.typicode.com/photos')
  .then(res => res.json())
  .then(input => inputImge(input))
}
function inputImge(value){
  console.log(value);
  const section = document.getElementById('input-post')
  for(const valus of value){
    const {albumId, id, title, url, thumbnailUrl } = valus;
    const div = document.createElement('div')
    div.classList.add('styling')
    div.innerHTML =`
    <h1>albumId: ${albumId}</h1>
    <h1>Titel: ${title}</h1>
    <p>id is: ${id}</p>
    <img src="${url}" alt="">
    <img src="${thumbnailUrl}" alt="">
    `;
    section.appendChild(div)
  }
}

inpuValue()