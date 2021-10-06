import React from 'react';

class Item extends React.Component {
  
  constructor(props) {
    super(props)

    this.state = {
      clicks: 0,
      totalRemaining: 100,
    }
  }

  clicked() {
    this.setState({
      clicks: this.state.clicks + 1,
      totalRemaining: this.state.totalRemaining -1,
    })
  }
  
  render () {
      return (
        <div>
          <h1 onClick={() => this.clicked()}>
            Hello from {this.props.name}!
          </h1>
          <span>
            {this.state.clicks} clicks. {this.state.totalRemaining} remaining clicks.
          </span>
        </div>
      )
    }
  }

export default Item;