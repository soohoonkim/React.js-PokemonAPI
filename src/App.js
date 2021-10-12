// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import Item from './MyItem';

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
    }
  }

  getNewPokemon() {
    const randomPokemon = Math.round(Math.random() * 898)
    const url = `https://pokeapi.co/api/v2/pokemon/${randomPokemon}`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({
          name: capitalize(data.name),
          id: data.id,
          type: data["types"][0]["type"]["name"],
          sprite: data.sprites["front_default"],
          pokemonLoaded: true,
      })
    })
  }
  
  render () {
    return (
      <div>
        {
          this.state.pokemonLoaded &&
            <div>
              <h1>Pokemon API</h1>
              <p>{this.state.name}</p>
              <p>Pokedex no.: {this.state.id}</p>
              <ol> Type:
                <li>{this.state.type}</li>
                {/* {
                  this.state.type.map(type => {
                    return <li>{type}</li>
                  })
                } */}
              </ol>
              <p><a href={this.state.sprite}>Link to Pokemon sprite</a></p>
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
