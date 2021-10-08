// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import Item from './MyItem';

class Pokemon extends React.Component {
  
  constructor() {
    super()
    this.state = {
      name: null,
      id: null,
      type: [],
      sprite: '',
    }
  }

  getNewPokemon() {
    console.log("getting a new pokemon...")
    this.setState({
      name: "Bulbasaur",
      id: "1",
      type: ["grass", "poison"],
      sprite: "coming soon...",
    })
  }
  
  render () {
    return (
      <div>
        <h1>Pokemon API</h1>
        <p>{this.state.name}</p>
        <p>Pokedex no.: {this.state.id}</p>
        <ol> Type:
          <li>{this.state.type}</li>
          <li>{this.state.type}</li>
        </ol>
        <p>{this.state.sprite}</p>
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
