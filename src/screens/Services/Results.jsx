
import React, { Component } from 'react';
import { translate } from 'react-i18next';
import SearchResults from 'components/Search/SearchResults/SearchResults/SearchResults';

class ScreensServicesResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        {
          title: 'Koszenie trawników',
          price: '50',
          id: 1,
        },
        {
          title: 'Wyprowadzanie psów',
          price: '20',
          id: 2,
        },
        {
          title: 'Czyszczenie dywanów',
          price: '100',
          id: 3,
        },
        {
          title: 'Przeprowadzki',
          price: '200',
          id: 4,
        },
        {
          title: 'Korepetycje',
          price: '40',
          id: 5,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <SearchResults services={this.state.services} />
      </div>
    );
  }
}

export { ScreensServicesResults };
export default translate()(ScreensServicesResults);
