import React from 'react';

export default class SearchInput extends React.Component {
    handleBlur = input => { 
        let searchPhrase = input.target.value.trim();
        console.log(searchPhrase);
    };
    render () {
        return (
            <input 
                type='text'
                id='offer-search-input'
                placeholder='Wpisz szukaną usługę'
                name='searchPhrase'
                onBlur={this.handleBlur}
            />
        );
    }
}