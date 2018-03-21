import React from 'react';
import { translate } from 'react-i18next';
import SearchInput from 'components/SearchForm/SearchInput';
import SubmitButton from 'components/UI/SubmitButton/SubmitButton';

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
    const { t } = this.props;
    return (
      <form className="search__form">
        <SearchInput />
        <SubmitButton value={t('components.searchForm.button')} />
      </form>
    );
  }
}

export { SearchForm };
export default translate()(SearchForm);
