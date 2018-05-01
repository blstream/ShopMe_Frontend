import React from 'react';
import './Terms.css';

class Terms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="terms">
        <h2 className="terms__caption">Ty określasz warynki</h2>
        <div className="term__column-wrapper">
          <div className="terms__column">
            <h3 className="terms__column--title">Budżetowe</h3>
            <div className="terms__column--contents">Filtruj wyniki wyszukiwania aby dopasować je do preferencji finansowych</div>
          </div>
          <div className="terms__column">
            <h3 className="terms__column--title">Czasowe</h3>
            <div className="terms__column--contents">Wyszukuj usługi dopasowane do Twoich ram czasowych</div>
          </div>
          <div className="terms__column">
            <h3 className="terms__column--title">Formy płatności</h3>
            <div className="terms__column--contents">
              Wybierz jedną z proponowancy przez nas form płatności dla pełnego bezpieczeństwa
            </div>
          </div>
        </div>
        <h2 className="terms__caption">My gwarantujemy bezpeczeństwo i satysfakcję</h2>
      </div>
    );
  }
}

export default Terms;
