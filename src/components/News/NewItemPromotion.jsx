import React from "react";
import like from "../../assets/img/news/like.png";
import cmt from "../../assets/img/news/comment.png";
import img1 from "../../assets/img/news/promotion/1.jpeg";
import img2 from "../../assets/img/news/promotion/2.jpeg";
import img3 from "../../assets/img/news/promotion/3.png";
import img4 from "../../assets/img/news/promotion/4.jpeg";
import img5 from "../../assets/img/news/promotion/5.png";
import img6 from "../../assets/img/news/promotion/6.jpeg";
import img7 from "../../assets/img/news/promotion/7.jpeg";
import img8 from "../../assets/img/news/promotion/8.jpeg";
export default function NewItemPromotion() {
  return (
    <div>
      <div className="row mb-3">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className="news-film">
            <img src={img1} alt="" />
            <h6>
              <a href="#latmat">BHD 59K/VÉ CẢ TUẦN !!!</a>
            </h6>
            <p>
              Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé
              khi mua vé trên TIX hoặc Mục Vé Phim trên ZaloPay.
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
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className="news-film">
            <img src={img2} alt="" />
            <h6>
              <a href="#latmat">TIX 1K/VÉ NGẠI CHI GIÁ VÉ</a>
            </h6>
            <p>
              Đồng giá 1k/vé cả tuần tất cả các rạp trên TIX + Nhận thêm 02
              voucher thanh toán ZaloPay thả ga
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
              <a href="#latmat">ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX</a>
            </h6>
            <p>
              ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX Hành trình tìm Ròm và Phúc chỉ
              với 1k cả tuần + nhận thêm 02 voucher khi đặt vé qua TIX.
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
              <a href="#latmat">BHD STAR VÉ CHỈ 59.000Đ CẢ TUẦN!</a>
            </h6>
            <p>
              Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé
              khi mua vé trên TIX và thanh toán bằng ZaloPay hoặc Mục Vé Phim
              trên ZaloPay.
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
                    Beta Cineplex trở lại với hàng loạt ưu đãi lớn
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
                    [123Phim] Thứ 6 Không Đen Tối - Ưu đãi huỷ diệt 11k/vé Anh
                    Trai Yêu Quái
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
                    [123Phim] NHẬP MÃ 'PSM30K' - Giảm ngay 30k khi đặt vé Pháp
                    Sư Mù: Ai Chết Giơ Tay
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
                    [Mega GS] Một đoá hoa thay ngàn lời yêu
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
