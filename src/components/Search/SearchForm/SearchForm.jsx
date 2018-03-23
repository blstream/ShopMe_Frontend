import React from 'react';
import { translate } from 'react-i18next';
import SearchInput from 'components/Search/SearchForm/SearchInput';
import SubmitButton from 'components/UI/SubmitButton/SubmitButton';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services: '',
      searchPhrase: null,
    };

    this.handleSearchInputChanged = this.handleSearchInputChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3001/offers')
      .then(response => response.json())
      .then(services => this.setState({ services }));
  }

  handleSearchInputChanged(searchPhrase) {
    this.setState({ searchPhrase });
  }

  handleSubmit(event) {
    event.preventDefault();
    const foundServices = this.state.services.filter(service =>
      service.title.includes(this.state.searchPhrase));
    this.props.updateFoundServices(foundServices);
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
