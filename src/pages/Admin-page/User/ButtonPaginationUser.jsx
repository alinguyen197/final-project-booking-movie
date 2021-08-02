import React, { useState } from "react";

export default function ButtonPaginationUser(props) {
  const { onUserChange, paginationUser } = props;
  const { currentPage, totalPages } = paginationUser;

  const [pageNumberLimit, setPageNumberLimit] = useState(10);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(10);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const handleUserChange = (newPage) => {
    if (paginationUser) {
      onUserChange(newPage);
    }
  };

  const handleUserChangeNext = (newPage) => {
    onUserChange(newPage);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handleUserChangePre = (newPage) => {
    onUserChange(newPage);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  // Logic for displaying page numbers
  const userNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    userNumbers.push(i);
  }

  const renderUserNumbers = userNumbers.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <button
          className={
            currentPage === number
              ? "btn page-link-active mr-2"
              : "btn page-link mr-2"
          }
          key={number}
          id={number}
          onClick={() => handleUserChange(number)}
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
        onClick={() => handleUserChangePre(currentPage - 1)}
        className="btn page-link mr-2"
      >
        Pre
      </button>

      {renderUserNumbers}

      <button
        disabled={currentPage >= totalPages}
        onClick={() => handleUserChangeNext(currentPage + 1)}
        className="btn page-link"
      >
        Next
      </button>
    </div>
  );
}
