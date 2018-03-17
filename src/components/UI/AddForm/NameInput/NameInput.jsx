import React, { Component } from 'react';
// import { translate } from 'react-i18next';

class AddFormNameInput extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }

  handleNameChange = (event) => {
      this.setState({name: event.target.value});
  };

  render() {
    return (
      <div className="AddFormName">
        <label htmlFor="name">
          Imię *
          <input
            className="AddFormNameInput"
            type="text"
            name={this.props.name}
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </label>
        {/* {this.renderNameError()} */}
      </div>
    );
  }
//   renderNameError = () =>{

//   }
}

// export { AddFormNameInput };
// export default translate()(AddFormNameInput);
export default AddFormNameInput;
