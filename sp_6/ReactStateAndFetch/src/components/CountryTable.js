import React, { Component } from "react";
import Countries from './Countries';
import Labels from './Labels';

class CountryTable extends Component {


  render() {
    return (
      <table className="table">
        <Labels labels={this.props.labels} />
        <Countries countries={this.props.countries} />
      </table>
    );
  }
}
export default CountryTable;