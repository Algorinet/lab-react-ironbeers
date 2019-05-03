import React from "react";
import axios from "axios";
import './beers.css';

class beers extends React.Component {
  state = {
    beers: []
  };

  componentDidMount() {
    axios.get("http://localhost:5000/all").then(allBeersPayload => {
      const allBeers = allBeersPayload.data;

      this.setState({
        ...this.state,
        beers: allBeers
      });
    });
  }

  render() {
    return (
    this.state.beers.map((beer, idx) => {
      return (
        <ul>
          <li key={idx} className="listado">
            <h3>{beer.name}</h3>
            <h5>{beer.tagline}</h5>
            <img src={beer.image_url} alt="" width="50px" />
            <p>{beer.contributed_by}</p>
          </li>
        </ul>
      )
    })
    )}
}

export default beers;
