import React from 'react';
import { translate } from 'react-i18next';
import SearchInput from 'components/Search/SearchForm/SearchInput';
import SubmitButton from 'components/UI/SubmitButton/SubmitButton';
import './SearchForm.css';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPhrase: null,
      validPhrase: false,
    };

    this.handleSearchInputChanged = this.handleSearchInputChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSearchInputChanged(searchPhrase, validPhrase) {
    this.setState({ searchPhrase, validPhrase });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.validPhrase === false) return;
    this.props.updateSearchPhrase(this.state.searchPhrase);
    fetch(`${process.env.REACT_APP_API}/offers?title=${this.state.searchPhrase}`)
      .then(response => response.json())
      .then((services) => {
        this.props.updatePaginationData({
          totalPages: services.totalPages,
        });
        this.props.updateFoundServices(services);
      });
    this.props.updateFoundServices([]);
  }

  render() {
    const { t } = this.props;
    return (
      <form className="search__form">
        <SearchInput onSearchInputChanged={this.handleSearchInputChanged} />
        <SubmitButton value={t('components.searchForm.button')} onClick={this.handleSubmit} searchPhrase={this.state.searchPhrase} />
      </form>
    );
  }
}

export { SearchForm };
export default translate()(SearchForm);
