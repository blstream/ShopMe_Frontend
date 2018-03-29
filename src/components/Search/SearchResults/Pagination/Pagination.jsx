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
      <div className="pagiantion--button__first">1</div>;

    const lastPage =
      <div className="pagiantion--button__last">last</div>;

    const prevPage =
      <div className="pagiantion--button__previous">prev</div>;

    const nextPage =
      <div className="pagiantion--button__next">next</div>;

    const inactivePage =
      <div className="pagination--button__inactive">...</div>;

    return (
      <div className="pagination">
        {prevPage}
        {firstPage}
        {inactivePage}
        <ul className="pagination--list">
          {page}
        </ul>
        {inactivePage}
        {lastPage}
        {nextPage}
      </div>
    );
  }
}
