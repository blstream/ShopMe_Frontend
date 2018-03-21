import React from 'react';
import SearchInput from 'components/SearchForm/SearchInput';
import SubmitButton from 'components/SearchForm/SubmitButton';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services: '',
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/offers')
      .then(response => response.json())
      .then(services => this.setState({ services }));
  }

  render() {
    return (
      <form className="search__form">
        <SearchInput />
        <SubmitButton />
      </form>
    );
  }
}

export default SearchForm;
