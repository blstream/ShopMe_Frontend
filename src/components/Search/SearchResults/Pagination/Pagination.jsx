import React from 'react';
import './Pagination.css';

export default class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startPage: this.props.page > this.props.margin ? this.props.page - this.props.margin : 1,
      endPage: (this.props.page + this.props.margin > this.props.totalPages
        ? this.props.totalPages
        : this.props.page + this.props.margin),
      totalPages: this.props.totalPages,
    };

    this.onPageChange = this.onPageChange.bind(this);
    this.goFirstPage = this.goFirstPage.bind(this);
    this.goLastPage = this.goLastPage.bind(this);
    this.goPrevPage = this.goPrevPage.bind(this);
    this.goNextPage = this.goNextPage.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps === this.props) return;
    const { margin, page, totalPages } = this.props;
    const startPage = page > margin ? page - margin : 1;
    const endPage = page + margin > totalPages ? totalPages : page + margin;
    this.setState({ startPage, endPage, totalPages });
  }

  onPageChange(event) {
    const index = Array.prototype.indexOf
      .call(event.target.parentNode.parentNode.children, event.target.parentNode);
    this.props.onPageChange(index + this.state.startPage);
  }

  goFirstPage() {
    this.props.onPageChange(1);
  }
  goLastPage() {
    this.props.onPageChange(this.state.totalPages);
  }
  goPrevPage() {
    this.props.onPageChange(this.props.page - 1);
  }
  goNextPage() {
    this.props.onPageChange(this.props.page + 1);
  }
  render() {
    const { startPage, endPage, totalPages } = this.state;
    const { page } = this.props;
    const pages = [];
    const firstPage = totalPages > 1 && page > 3
      ? (
        <button
          className="pagination__button pagination__button--first"
          onClick={this.goFirstPage}
        >1
        </button>
      )
      : null;

    const lastPage = totalPages > 1 && page < totalPages - 2
      ? (
        <button
          className="pagination__button pagination__button--last"
          onClick={this.goLastPage}
        >{totalPages}
        </button>
      )
      : null;

    const prevPage = page === 1
      ? null
      : (
        <button
          className="pagination__button pagination__button--previous"
          onClick={this.goPrevPage}
        >&lt;
        </button>
      );

    const nextPage = page === totalPages
      ? null
      : (
        <button
          className="pagination__button pagination__button--next"
          onClick={this.goNextPage}
        >&gt;
        </button>
      );

    const inactivePageBefore = totalPages >= 5 && page > 4
      ? (
        <button
          className="pagination__button pagination__button--inactive"
        >...
        </button>
      )
      : null;

    const inactivePageAfter = totalPages >= 5 && page < totalPages - 3
      ? (
        <button
          className="pagination__button pagination__button--inactive"
        >...
        </button>
      )
      : null;

    for (let i = startPage; i <= endPage; i += 1) {
      pages.push((
        <li
          key={i}
          role="presentation"
        >
          <button
            onClick={this.onPageChange}
            className={i === page ? 'pagination__button--active' : 'pagination__button'}
          >{i}
          </button>
        </li>
      ));
    }

    return (
      <div className="pagination">
        {prevPage}
        {firstPage}
        {inactivePageBefore}
        <ul className="pagination__list">
          {pages}
        </ul>
        {inactivePageAfter}
        {lastPage}
        {nextPage}
      </div>
    );
  }
}
