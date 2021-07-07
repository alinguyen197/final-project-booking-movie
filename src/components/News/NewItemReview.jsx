import React from "react";
import like from "../../assets/img/news/like.png";
import cmt from "../../assets/img/news/comment.png";
import img1 from "../../assets/img/news/review/1.png";
import img2 from "../../assets/img/news/review/2.png";
import img3 from "../../assets/img/news/review/3.png";
import img4 from "../../assets/img/news/review/4.png";
import img5 from "../../assets/img/news/review/5.png";
import img6 from "../../assets/img/news/review/6.jpeg";
import img7 from "../../assets/img/news/review/7.jpeg";
import img8 from "../../assets/img/news/review/8.jpeg";
export default function NewItemReview() {
  return (
    <div>
      <div className="row mb-3">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className="news-film">
            <img src={img1} alt="" />
            <h6>
              <a href="#latmat">
                Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối liên kết
              </a>
            </h6>
            <p>Điểm nhấn của phim kinh dị năm 2020 chính là Tàn Tích Quỷ Ám</p>
            <span className="news-reaction">
              <span>
                <img src={like} alt="" /> 0
              </span>
              <span>
                <img src={cmt} alt="" />0
              </span>
            </span>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className="news-film">
            <img src={img2} alt="" />
            <h6>
              <a href="#latmat">Review: Dinh Thự Oan Khuất (Ghost Of War)</a>
            </h6>
            <p>
              Tuy là một bộ phim có chất lượng tốt, nhưng có vẻ Dinh Thự Oan
              Khuất vẫn chưa đủ để đem khán giả trở lại phòng vé!
            </p>
            <span className="news-reaction">
              <span>
                <img src={like} alt="" /> 0
              </span>
              <span>
                <img src={cmt} alt="" />0
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
          <div className="news-film">
            <img src={img3} alt="" />
            <h6>
              <a href="#latmat">
                ‘BlacKkKlansman’ - cốc nước lạnh để người Mỹ thức tỉnh
              </a>
            </h6>
            <p>
              Tác phẩm nhận đề cử Phim truyện xuất sắc tại Oscar 2019 của đạo
              diễn Spike Lee là một lát cắt nữa về nạn phân biệt chủng tộc - nỗi
              đau gây nhức nhối nước Mỹ cho tới tận hôm nay.
            </p>
            <span className="news-reaction">
              <span>
                <img src={like} alt="" /> 0
              </span>
              <span>
                <img src={cmt} alt="" />0
              </span>
            </span>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
          <div className="news-film">
            <img src={img4} alt="" />
            <h6>
              <a href="#latmat">American Sniper - Chính nghĩa hay phi nghĩa?</a>
            </h6>
            <p>
              American Sniper khắc họa một tay súng bắn tỉa “huyền thoại” của
              Hải quân Mỹ với 4 lần tham chiến ở Trung Đông. Câu chuyện phim
              chậm rãi đưa người xem qua từng thời khắc khác nhau của Kyle, từ
              thửa nhỏ, thiếu niên, rồi gia nhập quân đội, rồi tham chiến. Từng
              khoảnh khắc bắt đầu nhẹ nhàng...
            </p>
            <span className="news-reaction">
              <span>
                <img src={like} alt="" /> 0
              </span>
              <span>
                <img src={cmt} alt="" />0
              </span>
            </span>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
          <div className="news-film">
            <div className="news-film-list">
              <div className="news-film-list-left">
                <img src={img5} alt="" />
              </div>
              <div className="news-film-list-right">
                <p>
                  <a href="#granding">
                    Review: Spider-Man: Into The Spider-Vesre
                  </a>
                </p>
              </div>
            </div>
            <div className="news-film-list">
              <div className="news-film-list-left">
                <img src={img6} alt="" />
              </div>
              <div className="news-film-list-right">
                <p>
                  <a href="#boctem">
                    COVID-19 là bản chính thức của MEV-1 phim contagion (2011)
                  </a>
                </p>
              </div>
            </div>
            <div className="news-film-list">
              <div className="news-film-list-left">
                <img src={img7} alt="" />
              </div>
              <div className="news-film-list-right">
                <p>
                  <a href="#tiectrangmau">
                    [Review] Siêu Vệ Sĩ Sợ Vợ - Giải cứu Tổng thống chưa bao giờ
                    lầy lội và hài hước đến thế
                  </a>
                </p>
              </div>
            </div>
            <div className="news-film-list">
              <div className="news-film-list-left">
                <img src={img8} alt="" />
              </div>
              <div className="news-film-list-right">
                <p>
                  <a href="#supergirl">
                    [Review] Bloodshot - Mở màn ấn tượng cho Vũ trụ Siêu anh
                    hùng Valiant
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
