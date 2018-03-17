import React from 'react';
import { translate } from 'react-i18next';

class SearchInput extends React.Component {
    constructor () {
        super ();
        this.state = {
            searchPhrase: '',
            validPhrase: true
        }
    }
    handleBlur = input => {
        const searchPhrase = input.target.value.trim();
        const cleanedSearchPhrase = searchPhrase.replace(/[!@#$%^&*()=+-_;:'"<>,.?/{}|`~[\]\\]/g, '');
        const validPhrase = cleanedSearchPhrase.length <= 1  ? false : true;
        console.log(cleanedSearchPhrase);
        this.setState({searchPhrase: cleanedSearchPhrase, validPhrase: validPhrase });
    };
    render () {
        const { t } = this.props;
        return (
            <div>
                <input
                    type='text'
                    id='offer-search-input'
                    placeholder={t('components.searchForm.input')}
                    name='searchPhrase'
                    onBlur={this.handleBlur}
                />
                <p>{ this.state.validPhrase ? '' : t('components.searchForm.lengthError') } </p>
            </div>
        );
    }
}

export { SearchInput };
export default translate()(SearchInput);

