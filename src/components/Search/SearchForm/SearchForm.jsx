import React from 'react';
import { translate } from 'react-i18next';
import SearchInput from 'components/Search/SearchForm/SearchInput';
import SubmitButton from 'components/UI/SubmitButton/SubmitButton';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPhrase: null,
    };

    this.handleSearchInputChanged = this.handleSearchInputChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSearchInputChanged(searchPhrase) {
    this.setState({ searchPhrase });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`${process.env.REACT_APP_API}/offers?title=${this.state.searchPhrase}`)
      .then(response => response.json())
      .then(services => this.props.updateFoundServices(services));
  }

  render() {
    const { t } = this.props;
    return (
      <form className="search__form">
        <SearchInput onSearchInputChanged={this.handleSearchInputChanged} />
        <SubmitButton value={t('components.searchForm.button')} onClick={this.handleSubmit} />
      </form>
    );
  }
}

export { SearchForm };
export default translate()(SearchForm);
