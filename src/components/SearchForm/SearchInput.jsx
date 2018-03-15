import React from 'react';

export default class SearchInput extends React.Component {
    constructor () {
        super ();
        this.state = {
            searchPhrase: '',
            validPhrase: true
        }
    }
    handleBlur = input => { 
        const searchPhrase = input.target.value.trim();
        const cleanedSearchPhrase = searchPhrase.replace(/[!@#$^&*()=+-_;:'"<>,.?/{}|`~[\]\\]/g, '');
        const validPhrase = cleanedSearchPhrase.length <= 1  ? false : true;
        this.setState({searchPhrase: cleanedSearchPhrase, validPhrase: validPhrase });
    };
    render () {
        return (
            <div>
                <input 
                    type='text'
                    id='offer-search-input'
                    placeholder='Wpisz szukaną usługę'
                    name='searchPhrase'
                    onBlur={this.handleBlur}
                />
                <p>{ this.state.validPhrase ? '' : 'Wpisana fraza jest za krótka' } </p>
            </div>
        );
    }
}