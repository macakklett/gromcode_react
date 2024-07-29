import React from 'react';

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
  const lastPageNumber =
    totalItems % itemsPerPage === 0
      ? totalItems / itemsPerPage
      : Math.trunc(totalItems / itemsPerPage) + 1;

  return (
    <div className="pagination">
      <button className="btn" disabled={currentPage === 1} onClick={goPrev}>
        ←
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button className="btn" disabled={currentPage === lastPageNumber} onClick={goNext}>
        →
      </button>
    </div>
  );
};

export default Pagination;
