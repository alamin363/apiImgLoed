const loadMail = (search) =>{
  const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
  fetch(url)
  .then(res => res.json())
  .then(data => displayMail(data.meals))
}
const displayMail = datas =>{
  const mealsContainer = document.getElementById('meal-container')
  mealsContainer.innerHTML = ``;
 datas.forEach(meals=> {
  // console.log(meals);
  const {strArea, strMealThumb, strInstructions, idMeal,  strMeal} = meals;
  const mealDiv = document.createElement('div');
  mealDiv.classList.add('col')
  mealDiv.innerHTML = `
  <div onclick="showmealDetail(${idMeal})" class="card">
  <img src="${strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${strMeal}</h5>
    <p class="card-text">${strInstructions.slice(0, 200)}</p>
  </div>
</div>
  `;
  mealsContainer.appendChild(mealDiv)
 });
}
loadMail('a')
const  searchFood = () =>{
 const serchFild = document.getElementById('search-filde');
 const searchText = serchFild.value;
 loadMail(searchText);
 serchFild.value = ''
}
const showmealDetail = (idMeal) =>{
  // console.log('greate detale', idMeal);
  const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  console.log(url);
  fetch(url)
  .then(res => res.json())
  .then(data => showDisplay(data))
}
const showDisplay = value =>{
  console.log(value.meals[0]);
  const {strMeal, strInstructions, strMealThumb, strSource, strYoutube, strIngredient1, strIngredient2, strIngredient3 } = value.meals[0];
  const DetailsContainer =document.getElementById('detaile-container')
  DetailsContainer.innerHTML = `
  <div class="card">
          <img src="${strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${strMeal}</h5>
            <p class="card-text">${strInstructions.slice(0,50)}.</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${strIngredient1}</li>
            <li class="list-group-item">${strIngredient2}</li>
            <li class="list-group-item">${strIngredient3}</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">${strSource}</a>
            <a href="#" class="card-link">${strYoutube}</a>
          </div>
        </div>
  `;
}