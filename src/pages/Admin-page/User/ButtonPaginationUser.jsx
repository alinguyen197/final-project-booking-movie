import React from "react";

export default function ButtonPaginationUser(props) {
  const { onUserChange, paginationUser } = props;
  // currentPage số  trang hiện tại
  // count bao nhiu item trên mỗi trang
  // totalCount tổng số item
  //totalPages là tổng số trang (tổng số item / số item trên mỗi trang)
  // pagination đc truyền từ api
  const { currentUser, count, totalCount, totalUsers } = paginationUser;
  //math,ceil => 5,1 => 6
  // const totalItemMovie = Math.ceil(totalCount / count);
  const handleUserChange = (newPage) => {
    if (paginationUser) {
      onUserChange(newPage);
    }
  };
  // Logic for displaying page numbers
  const userNumbers = [];
  for (let i = 1; i <= totalUsers; i++) {
    userNumbers.push(i);
  }

  const renderUserNumbers = userNumbers
    .filter((item) => item <= 5)
    .map((number) => {
      return (
        <button
          className="btn btn-primary mr-2"
          key={number}
          id={number}
          onClick={() => handleUserChange(number)}
        >
          {number}
        </button>
      );
    });
  return (
    <div className="text-center mb-5">
      <button
        disabled={currentUser <= 1}
        onClick={() => handleUserChange(currentUser - 1)}
        className="btn btn-primary mr-2"
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
      {renderUserNumbers}

      <button
        disabled={currentUser >= totalUsers}
        onClick={() => handleUserChange(currentUser + 1)}
        className="btn btn-primary"
      >
        Next
      </button>
    </div>
  );
}
