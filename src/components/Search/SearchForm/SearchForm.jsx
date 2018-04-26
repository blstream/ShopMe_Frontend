import React from 'react';
import { translate } from 'react-i18next';
import { Redirect } from 'react-router';
import SearchInput from 'components/Search/SearchForm/SearchInput';
import SubmitButton from 'components/UI/SubmitButton/SubmitButton';
import './SearchForm.css';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPhrase: null,
      validPhrase: false,
      searchedFromQuery: false,
    };

    this.handleSearchInputChanged = this.handleSearchInputChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearchInputChanged(searchPhrase, validPhrase) {
    this.setState({
      searchPhrase, validPhrase,
    }, () => {
      if (this.props.searchQuery) {
        this.setState({ searchedFromQuery: true });
        if (this.state.searchedFromQuery === false) {
          this.props.afterValidate(searchPhrase);
        }
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.validPhrase === false) return;
    this.props.updateSearchPhrase(this.state.searchPhrase);
    this.props.onSubmit(this.state.searchPhrase)
      .then(() => {
        this.props.updatePaginationData({
          totalPages: this.props.services.totalPages,
        });
        this.props.updateFoundServices(this.props.services);
      });
    this.props.updateFoundServices([]);
    this.setState({ fireRedirect: true });
  }

  render() {
    const { t } = this.props;

    return (
      <div>
        {this.state.fireRedirect && (
          <Redirect
            to={{
              pathname: '/search',
              search: `?title=${this.state.searchPhrase}`,
            }}
          />
        )}
        <form className="search__form">
          <SearchInput
            onSearchInputChanged={this.handleSearchInputChanged}
            searchQuery={this.props.searchQuery}
            afterValidate={this.props.afterValidate}
          />
          <SubmitButton value={t('components.searchForm.button')} onClick={this.handleSubmit} searchPhrase={this.state.searchPhrase} />
        </form>
      </div>
    );
  }
}

export { SearchForm };
export default translate()(SearchForm);
