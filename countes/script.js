const loadCountres = ()=>{
  fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())
  .then(res => displayCountres(res))
}
const displayCountres = countres =>{
  const countreCountiner = document.getElementById('conuntries-conaienr')
  countres.forEach(countre => {
    // console.log(countre);
    const {name, car, cca2, flags, capital  } = countre;
    const counteDiv = document.createElement('div')
    counteDiv.classList.add('country')
    counteDiv.innerHTML = `
    <h3>Name: ${name.common}</h3>
    <p>Capital: ${capital ? capital[0] : 'No Capital'}</p>
    <button onclick="loadCountreDetail('${cca2}')">Details</button>
    `;
    countreCountiner.appendChild(counteDiv)    
  });
}
const loadCountreDetail = (code) =>{
// https://restcountries.com/v3.1/alpha/{code}
const url = `
https://restcountries.com/v3.1/alpha/${code}`
//  console.log(code);
fetch(url)
.then(res => res.json())
.then(data => displayCountreDetail(data[0]))

}
const displayCountreDetail = country =>{
 const countryDetale = document.getElementById('country-detale')
 const {name, car, cca2, flags, capital} = country;
 countryDetale.innerHTML = `
  <h2>Details: ${name.common}</h2>
  <img src="${flags.png}">
 `;
}
loadCountres()