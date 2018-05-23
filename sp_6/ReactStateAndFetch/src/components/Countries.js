import React, { Component } from 'react';

export default class Countries extends Component {
    
    info = array => {
        let info = array[0];
        if (array.length > 1) {
            info += " +(" + (array.length - 1) + ")";
        }
        return info;
    }

    formatCountries = () => (
        this.props.countries.map(country => (
            <tr key={country.name}>
                <td>{country.name}</td>
                <td>{country.capital}</td>
                <td>{country.region}</td>
                <td>{country.population}</td>
                <td>{country.area}</td>
                <td>{this.info(country.timezones)}</td>
                <td>{this.info(country.borders)}</td>
                <td>{this.info(country.topLevelDomain)}</td>
                <td>{this.info(country.currencies)}</td>
                <td>{this.info(country.languages)}</td>
            </tr>
        ))
    )

    render() {
        return (
            <tbody>
                {this.formatCountries()}
            </tbody>
        )
    }

}