import React from 'react';

export default class SubmitButton extends React.Component {
    handleSubmit = submit => { 
        submit.preventDefault();
    };
    render () {
        return (
            <input 
                type='submit'
                name='searchSubmit'
                value='Szukaj'
                onClick={this.handleSubmit}
            />
        );
    }
}