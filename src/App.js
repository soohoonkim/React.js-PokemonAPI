// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import Item from './MyItem';

class PokemonTypeRows extends React.Component {
  render () {
    return (
      <li>{this.props.types["type"]["name"]}</li>
    )
  }    
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

class Pokemon extends React.Component {

  constructor() {
    super()
    this.state = {
      pokemonLoaded: false,
      name: null,
      id: null,
      type: [],
      sprite: '',
      spriteDisplay: null,
    }
  }

  getNewPokemon() {
    const randomPokemon = Math.round(Math.random() * 898)
    const url = `https://pokeapi.co/api/v2/pokemon/${randomPokemon}`
    const spriteImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomPokemon}.png`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({
          name: capitalize(data.name),
          id: data.id,
          type: data.types,
          sprite: data.sprites["front_default"],
          spriteDisplay: spriteImage,
          pokemonLoaded: true,
      })
    })
  }

  render () {

    const pokemonType = this.state.type.map((types, i) => {
      return <PokemonTypeRows key={i} types={types} />
    })

    return (
      <div>
        {
          this.state.pokemonLoaded &&
            <div>
              <h1>Pokemon API</h1>
              <p>{this.state.name}</p>
              <p>Pokedex no.: {this.state.id}</p>
              <ol> Type:
                {pokemonType}
              </ol>
              {/* <p><a href={this.state.sprite}>Link to {this.state.name}'s sprite</a></p> */}
              <img src={this.state.spriteDisplay} alt={this.state.name}></img>
            </div>
        }
        <button
          type="button"
          onClick={() => this.getNewPokemon()}
          className="btn"
        >
          Generate a random Pokemon
        </button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Pokemon />
      </header>
    </div>
  );
}

export default App;
