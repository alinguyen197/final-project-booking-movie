import React from "react";

export default function ButtonPagination(props) {
  const { onPageChange, pagination } = props;
  // currentPage số  trang hiện tại
  // count bao nhiu item trên mỗi trang
  // totalCount tổng số item
  //totalPages là tổng số trang (tổng số item / số item trên mỗi trang)
  // pagination đc truyền từ api
  const { currentPage, count, totalCount, totalPages } = pagination;
  //math,ceil => 5,1 => 6
  // const totalItemMovie = Math.ceil(totalCount / count);
  const handlePageChange = (newPage) => {
    if (pagination) {
      onPageChange(newPage);
    }
  };
  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers
    .filter((item) => item <= 5)
    .map((number) => {
      return (
        <button
          className="btn mr-2 page-link "
          key={number}
          id={number}
          onClick={() => handlePageChange(number)}
        >
          {number}
        </button>
      );
    });
  return (
    <div className="text-center mb-5 addPagination">
      <button
        disabled={currentPage <= 1}
        onClick={() => handlePageChange(currentPage - 1)}
        className="btn mr-2 page-link "
      >
        Pre
      </button>

      {/* cách 2 
      {[...Array(totalPages)].map((x, number) => {
        return (
          <button
            className="btn btn-primary mr-2"
            key={number}
            id={number}
            onClick={() => handlePageChange(number)}
          >
            {number}
          </button>
        );
      })} */}
      {renderPageNumbers}

      <button
        disabled={currentPage >= totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        className="btn mr-2 page-link "
      >
        Next
      </button>
    </div>
  );
}
