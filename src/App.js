// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import Item from './MyItem';

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
    const url = "https://pokeapi.co/api/v2/pokemon/1"
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({
          name: data.name,
          id: data.id,
          type: data["types"][0]["type"]["name"],
          sprite: "coming soon...",
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
              </ol>
              <p>{this.state.sprite}</p>
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
