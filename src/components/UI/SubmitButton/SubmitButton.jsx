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
      <button
        type="submit"
        onClick={this.handleSubmit}
        className={this.props.className}
        disabled={this.props.phrase < 2}
      >
        {this.props.children}
      </button>
    );
  }
}

export { SubmitButton };
export default SubmitButton;
