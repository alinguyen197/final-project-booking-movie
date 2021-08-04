import React, { useState } from "react";
import logo from "../../assets/img/avatar.png";
import commentStar from "../../assets/img/commentStar.png";
import { useDispatch, useSelector } from "react-redux";
import buttonMedia from "../../assets/img/buttonMedia.png";
import like from "../../assets/img/news/like.png";
import { ADD_COMMENT } from "../../redux/const/commentCons";
import Swal from "sweetalert2";

export default function Comment() {
  const taiKhoan = JSON.parse(localStorage.getItem("taiKhoan"));
  const { listComment } = useSelector((state) => state.commentReducer);
  const [state, setState] = useState({
    noidung: "",
    err: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    let { value } = e.target;

    setState({
      noidung: value,
      err: "",
    });
  };
  const handleClick = (event) => {
    event.preventDefault();
    if (taiKhoan === null) {
      Swal.fire({
        icon: "error",
        html: "Vui lòng đăng nhập ",
      });
      document.getElementById("closeModal").click();
      return;
    }

    if (state.noidung === "") {
      setState({
        err: "Hãy cho tix bạn đang nghĩ gì.",
      });
      return;
    }
    dispatch({
      type: ADD_COMMENT,
      payload: {
        name: taiKhoan,
        content: state.noidung,
        img: `https://i.pravatar.cc/150?${state.noidung}`,
      },
    });

    document.getElementById("closeModal").click();
  };
  const renderComment = () => {
    return listComment?.map((value, index) => (
      <div key={index} className="card-comment ">
        <div className="card-comment-header">
          <div className="infor">
            <img src={value.img} alt="" />
            <div>
              <p className="name">{value.name}</p>
              <p className="active-time">Vừa xong </p>
            </div>
          </div>

          <div className="rating">
            <p>10</p>
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
        </div>
        <div className="card-comment-body">
          <div>{value.content}</div>
        </div>
        <div className="card-comment-footer">
          <button>
            <img src={like} alt="" />
          </button>

          <span>0</span>
          <span>Thích </span>
        </div>
      </div>
    ));
  };
  return (
    <div id="comment-movie-detail">
      <div className="input-group mb-3" style={{ borderRadius: "6px" }}>
        <div className="input-group-prepend">
          <img src={logo} alt="" />
        </div>
        <button
          className="form-control"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          Bạn cảm thấy thế nào?
        </button>
        <div className="input-group-append commentStar">
          <div style={{ backgroundColor: "white", lineHeight: "60px" }}>
            <img src={commentStar} alt="" />
          </div>
        </div>
      </div>

      {renderComment()}

      {/* Modal */}
      <div
        className="modal fade comment-modal"
        id="exampleModalCenter"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <button
                id="closeModal"
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-title">
              <p>5.0</p>
              <div>
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
                <i className="far fa-star" />
                <i className="far fa-star" />
              </div>
            </div>
            <div className="modal-body">
              <input
                name="noidung"
                type="text"
                placeholder="Nói cho mọi người biết bạn nghĩ gì về phim này..."
                onChange={handleChange}
              />
            </div>
            <div style={{ textAlign: "center", color: "red" }}>{state.err}</div>
            <div className="modal-footer">
              <button className="modal-button-media">
                <img src={buttonMedia} alt="" />
                Ảnh/Video
              </button>
              <button
                type="button"
                className="modal-button"
                onClick={handleClick}
              >
                ĐĂNG
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
