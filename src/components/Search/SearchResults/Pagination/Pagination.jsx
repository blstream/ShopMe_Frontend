import React from 'react';

export default class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.onPageChange = this.onPageChange.bind(this);
    this.goFirstPage = this.goFirstPage.bind(this);
    this.goLastPage = this.goLastPage.bind(this);
    this.goPrevPage = this.goPrevPage.bind(this);
    this.goNextPage = this.goNextPage.bind(this);
  }
  onPageChange(event) {
    const index = Array.protytype.indexOf.call(event.target.parentNode.children, event.target);
    this.props.onPageChange(index + this.state.startPage);
  }
  getDerivedStateFromProps(newProps, prevState) {
    if (newProps === prevState) return;
    const { margin, page, count } = newProps;
    const startPage = page > margin ? page - margin : 1;
    const endPage = page + margin > count ? count : page + margin;
    this.setState({ startPage, endPage, count });
  }
  goFirstPage() {
    this.props.onPageChange(1);
  }
  goLastPage() {
    this.props.onPageChange(this.state.count);
  }
  goPrevPage() {
    this.props.onPageChange(this.props.page - 1);
  }
  goNextPage() {
    this.props.onPageChange(this.props.page + 1);
  }
  render() {
    const { startPage, endPage, count } = this.state;
    const { page, margin } = this.props;
    const pages = [];
    const firstPage = page - margin > 1 ?
      (
        <button
          className="pagination__button pagiantion__button--first"
          onClick={this.goFirstPage}
        >1
        </button>
      ) :
      null;

    const lastPage = page + margin < count ?
      (
        <button
          className="pagination__button pagiantion__button--last"
          onClick={this.goLastPage}
        >{count}
        </button>
      ) :
      null;

    const prevPage = page === 1 ? null :
      (
        <button
          className="pagination__button pagiantion__button--previous"
          onClick={this.goPrevPage}
        >prev
        </button>
      );

    const nextPage = page === count ? null :
      (
        <button
          className="pagination__button pagiantion__button--next"
          onClik={this.goNextPage}
        >next
        </button>
      );

    const inactivePage = count >= 5 ?
      (
        <button
          className="pagination__button pagination__button--inactive"
        >...
        </button>
      ) :
      null;

    for (let i = startPage; i <= endPage; i += 1) {
      pages.push((
        <li
          key={i}
          onClick={this.onPageChange}
          role="presentation"
        >{i}
        </li>
      ));
    }

    return (
      <div className="pagination">
        {prevPage}
        {firstPage}
        {inactivePage}
        <ul className="pagination__list">
          {pages}
        </ul>
        {inactivePage}
        {lastPage}
        {nextPage}
      </div>
    );
  }
}
