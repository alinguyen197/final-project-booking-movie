import React, { useState } from "react";
import PropTypes from "prop-types";
import { useRef } from "react";

PostFilterForm.propTypes = {
  onSubmit: PropTypes.func,
};
PostFilterForm.defaultProps = {
  onSubmit: null,
};

function PostFilterForm(props) {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState("");

  //debounce

  const typingTimeOutRef = useRef(null);

  // useRef ko thay đổi giữa các lần render

  function handleSearchTermChange(e) {
    const value = e.target.value;
    setSearchTerm(e.target.value);

    if (!onSubmit) return;

    //set --- 100 -- clear, set -- 300 --> submit

    //set --- 300 --> submit

    if (typingTimeOutRef.current) {
      clearTimeout(typingTimeOutRef.current);
    }
    typingTimeOutRef.current = setTimeout(() => {
      const formValues = {
        searchTerm: value,
      };

      onSubmit(formValues);
    }, 1000);
  }
  return (
    <div className="form-group">
      <input
        type="search"
        className="form-control"
        id="usr"
        placeholder="Tìm phim...."
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
    </div>
  );
}

export default PostFilterForm;
