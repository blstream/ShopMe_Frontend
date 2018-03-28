import React from 'react';
import 'components/UI/SubmitButton/SubmitButton.css';

class SubmitButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(submit) {
    submit.preventDefault();
    this.props.onClick(submit);
  }

  render() {
    return (
      <input
        type="submit"
        value={this.props.value}
        onClick={this.handleSubmit}
        className="form__button--submit"
      />
    );
  }
}

export default SubmitButton;
