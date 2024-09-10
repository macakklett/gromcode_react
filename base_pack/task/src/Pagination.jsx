import React from 'react';

const Pagination = ({ currentPage, totalItems, itemsPerPage, changeCurrentPage }) => {
  const lastPageNumber =
    totalItems % itemsPerPage === 0
      ? totalItems / itemsPerPage
      : Math.trunc(totalItems / itemsPerPage) + 1;

  return (
    <div className="pagination">
      <button className="btn" disabled={currentPage === 1} onClick={() => changeCurrentPage(-1)}>
        {currentPage === 1 ? '' : '←'}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button
        className="btn"
        disabled={currentPage === lastPageNumber}
        onClick={() => changeCurrentPage(1)}
      >
        {currentPage === lastPageNumber ? '' : '→'}
      </button>
    </div>
  );
};

export default Pagination;
