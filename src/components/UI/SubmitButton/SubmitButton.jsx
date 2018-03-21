import React from 'react';
import 'components/UI/SubmitButton/SubmitButton.css';

class SubmitButton extends React.Component {
    handleSubmit = submit => {
        submit.preventDefault();
    };
    render () {
        return (
            <input
                type='submit'
                value={this.props.value}
                onClick={this.handleSubmit}
                className="form__button--submit"
            />
        );
    }
}

export default SubmitButton;
