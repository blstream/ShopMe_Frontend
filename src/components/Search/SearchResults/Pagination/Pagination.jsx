import React from 'react';

export default class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const page = [];
    const firstPage =
      <div className="pagiantion--container__button pagination__first">1</div>;

    const lastPage =
      <div className="pagiantion--container__button pagination__last">last</div>;

    const prevPage =
      <div className="pagiantion--container__button">prev</div>;

    const nextPage =
      <div className="pagiantion--container__button">next</div>;

    return (
      <div className="pagination">
        <div className="pagination--container">
          {prevPage}
          {firstPage}
          <ul className="pagination--conatiner__list">
            {page}
          </ul>
          {lastPage}
          {nextPage}
        </div>
      </div>
    );
  }
}
