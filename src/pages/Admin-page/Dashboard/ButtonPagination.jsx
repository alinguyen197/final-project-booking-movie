import React from "react";

export default function ButtonPagination(props) {
  const { onPageChange, pagination } = props;
  // currentPage số  trang hiện tại
  // count bao nhiu item trên mỗi trang
  // totalCount tổng số item
  const { currentPage, count, totalCount, totalPages } = pagination;
  //math,ceil => 5,1 => 6
  const totalItemMovie = Math.ceil(totalCount / count);
  const handlePageChange = (newPage) => {
    if (pagination) {
      onPageChange(newPage);
    }
  };

  return (
    <div>
      <button
        disabled={currentPage <= 1}
        onClick={() => handlePageChange(currentPage - 1)}
        className="btn btn-primary mr-2"
      >
        Pre
      </button>
      <button className="btn btn-primary mr-2">{currentPage}</button>
      <button
        disabled={currentPage >= totalItemMovie}
        onClick={() => handlePageChange(currentPage + 1)}
        className="btn btn-primary"
      >
        Next
      </button>
    </div>
  );
}
