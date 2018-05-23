import React, { Component } from 'react';

export default class Labels extends Component {
    
    formatLabels = () => {
        return this.props.labels.map(label => {
            return <th key={label}>{label}</th>
        })
    }

    render() {
        return (
            <thead>
                <tr>
                    {this.formatLabels()}
                </tr>
            </thead>
        )
    }

}