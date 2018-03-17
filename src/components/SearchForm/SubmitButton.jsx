import React from 'react';
import { translate } from 'react-i18next';

class SubmitButton extends React.Component {
    handleSubmit = submit => {
        submit.preventDefault();
    };
    render () {
        const { t } = this.props;
        return (
            <input
                type='submit'
                name='searchSubmit'
                value={t('components.searchForm.button')}
                onClick={this.handleSubmit}
                className="search__form-item"
                id="search__submit"
            />
        );
    }
}

export { SubmitButton };
export default translate()(SubmitButton);
