import React from "react";

export default function InforTable(props) {
  const { movieDetail } = props;
  return (
    <div className="inforTable">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <div className="leftInfor">
            <p className="title">Đạo Diễn</p>
            <p className="content">Anh Khoa - Bá Văn</p>
          </div>
          <div className="leftInfor">
            <p className="title">Diễn Viên</p>
            <p className="content">Chris Av, Tony Yark, Ronaldo</p>
          </div>
          <div className="leftInfor">
            <p className="title">Thể Loại</p>
            <p className="content">Action Movie, Romantic</p>
          </div>
          <div className="leftInfor">
            <p className="title">Định Dạng</p>
            <p className="content">2D / Digital</p>
          </div>
          <div className="leftInfor">
            <p className="title">Bí Danh</p>
            <p className="content">{movieDetail.biDanh}</p>
          </div>
          <div className="leftInfor">
            <p className="title">Trailer</p>
            <p className="content">{movieDetail.trailer}</p>
          </div>
          <div className="leftInfor">
            <p className="title">Quốc Gia SX</p>
            <p className="content">America</p>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <div className="rightInfor">
            <p className="title">Nội Dung</p>
            <p className="content">{movieDetail.moTa}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
