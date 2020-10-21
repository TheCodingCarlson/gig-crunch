import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gigs: [],
      bands: []
    };
  }

  componentDidMount() {
    axios.get('https://localhost:44327/api/gigs/2020/')
      .then(res => this.setState({ gigs: res.data }))
      .catch(err => console.log(err));

    axios.get('https://localhost:44327/api/bands/')
      .then(res => this.setState({ bands: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>

        {this.state.gigs.map((gig, index) => {
          var band = this.state.bands.filter(band => band.code === gig.bandCode)[0];

          return (
            <ul key={index}>
              <li>Date: {gig.date}</li>
              <li>Band: {band.name}</li>
              <li>Venue: {gig.venue}</li>
              <li>City: {gig.city}</li>
              <li>State: {gig.state}</li>
              <li>Pay: {gig.pay}</li>
            </ul>
          )
        })}
      </div>
    )
  }
}

export default App;
