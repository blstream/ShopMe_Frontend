import React from 'react';
import PropTypes from 'prop-types';

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
        disabled={this.props.searchPhrase < 2}
      />
    );
  }
}

SubmitButton.defaultProps = {
  value: '',
  searchPhrase: '',
  onClick() { alert('Function onClick is not provided'); },
};

SubmitButton.propTypes = {
  value: PropTypes.string,
  searchPhrase: PropTypes.string,
  onClick: PropTypes.func,
};

export { SubmitButton };
export default SubmitButton;
