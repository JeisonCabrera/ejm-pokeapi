const input = document.querySelector("input")
const button = document.querySelector("button")
const pokemonContainer = document.querySelector(".pokemon-container")

button.addEventListener("click", (e) => {
    e.preventDefault()
    traerPokemon(input.value)
})

function traerPokemon(pokemon){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    .then((res) => res.json())
    .then((data) => {
        crearPokemon(data)
    })
}

function crearPokemon(pokemon){
    const img = document.createElement("img")
    img.src = pokemon.sprites.front_default

    const h3 = document.createElement("h3")
    h3.textContent = pokemon.name

    const experiencia = document.createElement("experiencia")
    experiencia.textContent = pokemon.base_experience

    const div = document.createElement("div")
    div.appendChild(h3)
    div.appendChild(experiencia)

    pokemonContainer.appendChild(div)
}