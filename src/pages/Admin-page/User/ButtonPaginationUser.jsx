import React from "react";

export default function ButtonPaginationUser(props) {
  const { onUserChange, paginationUser } = props;
  const { currentPage, totalPages } = paginationUser;

  const handleUserChange = (newPage) => {
    if (paginationUser) {
      onUserChange(newPage);
    }
  };
  // Logic for displaying page numbers
  const userNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    userNumbers.push(i);
  }

  const renderUserNumbers = userNumbers
    .filter((item) => item <= 10)
    .map((number) => {
      return (
        <button
          className="btn page-link mr-2"
          key={number}
          id={number}
          onClick={() => handleUserChange(number)}
        >
          {number}
        </button>
      );
    });
  return (
    <div className="text-center mb-5 addPagination">
      <button
        disabled={currentPage <= 1}
        onClick={() => handleUserChange(currentPage - 1)}
        className="btn page-link mr-2"
      >
        Pre
      </button>

      {renderUserNumbers}

      <button
        disabled={currentPage >= totalPages}
        onClick={() => handleUserChange(currentPage + 1)}
        className="btn page-link"
      >
        Next
      </button>
    </div>
  );
}
