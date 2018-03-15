import React from 'react';

export default class SearchInput extends React.Component {
    handleBlur = input => { 
        const searchPhrase = input.target.value.trim();
        const cleanedSearchPhrase = searchPhrase.replace(/[!@#$^&*()=+-_;:'"<>,.?/{}|`~[\]\\]/g, '');
        console.log(cleanedSearchPhrase);
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