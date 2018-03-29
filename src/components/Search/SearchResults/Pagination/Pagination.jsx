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
      <div className="pagination__button pagiantion__button--first">1</div>;

    const lastPage =
      <div className="pagination__button pagiantion__button--last">last</div>;

    const prevPage =
      <div className="pagination__button pagiantion__button--previous">prev</div>;

    const nextPage =
      <div className="pagination__button pagiantion__button--next">next</div>;

    const inactivePage =
      <div className="pagination__button pagination__button--inactive">...</div>;

    return (
      <div className="pagination">
        {prevPage}
        {firstPage}
        {inactivePage}
        <ul className="pagination__list">
          {page}
        </ul>
        {inactivePage}
        {lastPage}
        {nextPage}
      </div>
    );
  }
}
