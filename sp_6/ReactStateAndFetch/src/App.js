import React, { Component } from 'react';
import CountryTable from './components/CountryTable';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { countries: [], labels: [] }
  }

  componentDidMount() {
    const factory = this.props.factory;
    factory.getLabels(this.labelsUpdater);
    factory.getCountriesCont(3000, this.countriesUpdater);
  }

  componentWillUnmount() {
    this.props.factory.stopIntervalFetch();
  }

  countriesUpdater = data => {
    this.setState({ countries: data });
  }

  labelsUpdater = data => {
    this.setState({ labels: data });
  }

  render() {
    return (
      <div className="container">
        <div className="App-header">
          <h2>React, State, Fetch and Mobx</h2>
        </div>
        <div className="App-intro">
          <CountryTable countries={this.state.countries} labels={this.state.labels} />
        </div>
      </div>
    );
  }
}

export default App;
