document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON)

  POKEMON.forEach(function(pokemonObject) {
    renderPokemon(pokemonObject)
  });

  const searchBar = document.querySelector("form#pokemon-search-form");
  searchBar.addEventListener('keyup', () => {
    const searchValue = searchBar.search.value;
    if (searchValue == '' || searchValue == ' ') {
      showAll();
    } else {
      filterPokemon(searchValue)
    }
  });
})

function filterPokemon(searchValue) {
  const pokemons = document.querySelectorAll('div.pokemon-card');
  pokemons.forEach(card => {
    const name = card.querySelector('h1.center-text').innerHTML;
    if (name.includes(searchValue)) { 
      card.style.display = 'block'; 
    } else {
      card.style.display = 'none'; 
    }
  });
}

function showAll() {
  const pokemons = document.querySelectorAll('div.pokemon-card');
  pokemons.forEach(card => {
    card.style.display = 'block';
  }); 
}

function renderPokemon(pokemonObject) {
  const div = document.getElementById('pokemon-container');
  const card = document.createElement('div');
  card.style.display = 'block';
  card.classList.add("pokemon-card");
  card.innerHTML = 
    `<div class="pokemon-frame">
      <h1 class="center-text">${pokemonObject.name}</h1>
        <div class="pokemon-image">
          <img class="toggle-sprite" src=${pokemonObject.sprites.front}>
        </div>
      </div>
    </div>`
  div.appendChild(card);
  const frame = card.querySelector('.pokemon-frame');
  const img = card.querySelector('.toggle-sprite');
  addCardFlip(frame, pokemonObject, img);
}

function addCardFlip(frame, pokemonObject, img) {
  frame.addEventListener('click', function(event) {
    if (img.src == pokemonObject.sprites.front){
      img.src = pokemonObject.sprites.back;
    } else {
      img.src = pokemonObject.sprites.front;
    }
  });
}