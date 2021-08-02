import React, { useState } from "react";

export default function ButtonPagination(props) {
  const { onPageChange, pagination } = props;
  // currentPage số  trang hiện tại
  // count bao nhiu item trên mỗi trang
  // totalCount tổng số item
  //totalPages là tổng số trang (tổng số item / số item trên mỗi trang)
  // pagination đc truyền từ api
  const { currentPage, totalPages } = pagination;
  //math,ceil => 5,1 => 6
  // const totalItemMovie = Math.ceil(totalCount / count);

  // tăng giảm thì số number sẽ thay đổi
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

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

  const handlePageChangeNext = (newPage) => {
    onPageChange(newPage);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  const handlePageChangePre = (newPage) => {
    onPageChange(newPage);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const renderPageNumbers = pageNumbers.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <button
          className={
            currentPage === number
              ? `btn mr-2 page-link-active `
              : "btn mr-2 page-link"
          }
          key={number}
          id={number}
          onClick={() => handlePageChange(number)}
        >
          {number}
        </button>
      );
    } else {
      return null;
    }
  });
  return (
    <div className="text-center mb-5 addPagination">
      <button
        disabled={currentPage <= 1}
        onClick={() => handlePageChangePre(currentPage - 1)}
        className="btn mr-2 page-link "
      >
        Pre
      </button>

      {renderPageNumbers}

      <button
        disabled={currentPage >= totalPages}
        onClick={() => handlePageChangeNext(currentPage + 1)}
        className="btn mr-2 page-link "
      >
        Next
      </button>
    </div>
  );
}
