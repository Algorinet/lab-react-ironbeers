import React, { Component } from 'react'
import axios from 'axios';



export default class randomBeer extends Component {
  state = {
    randomBeer: ''
  }

  componentDidMount() {
    console.log("randomBeer montado")
    axios.get("http://localhost:5000/random").then(randomBeerPayload => {
      const random = randomBeerPayload.data;
      console.log(random)

      this.setState({
        ...this.state,
        randomBeer: random
      });
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.randomBeer.name}</h1>
            <h5>{this.state.randomBeer.tagline}</h5>
            <img src={this.state.randomBeer.image_url} alt="" width="100px" />
            <p>{this.state.randomBeer.contributed_by}</p>
      </div>
    )
  }
}
