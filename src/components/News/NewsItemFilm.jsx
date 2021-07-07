import React from "react";
import latmat from "../../assets/img/news/an-dinh-chac-nich-ngay-khoi-chieu-16-04-ly-hai-tung-clip-lat-mat-48h-dam-chat-fast-furious-mien-song-nuoc-16170881088272.png";
import kommbat from "../../assets/img/news/mortal-kombat-cuoc-chien-sinh-tu-goi-ten-nhung-phim-dien-anh-noi-tieng-duoc-chuyen-the-tu-cac-tua-game-dinh-dam-16170160290762.png";
import promise from "../../assets/img/news/promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi-16166710855522.png";
import tayquy from "../../assets/img/news/vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em-16165783843676.png";
import granding from "../../assets/img/news/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16115477671555.jpeg";
import boctem from "../../assets/img/news/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056939435004.png";
import tiectrangmau from "../../assets/img/news/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043751284117.png";
import supergirl from "../../assets/img/news/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041584850247.jpeg";
import like from "../../assets/img/news/like.png";
import cmt from "../../assets/img/news/comment.png";
export default function NewsItemFilm() {
  return (
    <div>
      <div className="row mb-3">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className="news-film">
            <img src={latmat} alt="" />
            <h6>
              <a href="#latmat">
                Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật
                Mặt: 48H đậm chất
              </a>
            </h6>
            <p>
              Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt
              đuổi gay cấn thót tim fans hâm mộ
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
            <img src={kommbat} alt="" />
            <h6>
              <a href="#latmat">
                [MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ] - GỌI TÊN NHỮNG PHIM ĐIỆN
                ẢNH NỔI TIẾNG ĐƯỢC CHUYỂN THỂ TỪ CÁC TỰA...
              </a>
            </h6>
            <p>
              Bên cạnh những kịch bản gốc mới mẻ và đầy bất ngờ, Hollywood cũng
              không thiếu những tác phẩm đình đám được chuyển thể từ tiểu
              thuyết, phim hoạt hình, hay thậm chí là cả trò chơi điện tử.
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
            <img src={promise} alt="" />
            <h6>
              <a href="#latmat">
                PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan và màn
                trả thù...
              </a>
            </h6>
            <p>
              Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở hạng mục nữ
              chính xuất sắc nhất cho vai diễn "đẫm máu" nhất sự nghiệp của cô
              trong phim
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
            <img src={tayquy} alt="" />
            <h6>
              <a href="#latmat">
                VỪA ĐẸP LẠI VỪA TÀI NĂNG, DÀN SAO NAM CỦA PHIM “BÀN TAY DIỆT
                QUỶ”...
              </a>
            </h6>
            <p>
              Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao về năng
              lực diễn xuất là Park Seo Joon, Woo Do Hwan và Choi Woo Sik, tác
              phẩm kinh dị – hành
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
                <img src={granding} alt="" />
              </div>
              <div className="news-film-list-right">
                <p>
                  <a href="#granding">
                    Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn
                  </a>
                </p>
              </div>
            </div>
            <div className="news-film-list">
              <div className="news-film-list-left">
                <img src={boctem} alt="" />
              </div>
              <div className="news-film-list-right">
                <p>
                  <a href="#boctem">
                    “Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành
                  </a>
                </p>
              </div>
            </div>
            <div className="news-film-list">
              <div className="news-film-list-left">
                <img src={tiectrangmau} alt="" />
              </div>
              <div className="news-film-list-right">
                <p>
                  <a href="#tiectrangmau">
                    Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2
                  </a>
                </p>
              </div>
            </div>
            <div className="news-film-list">
              <div className="news-film-list-left">
                <img src={supergirl} alt="" />
              </div>
              <div className="news-film-list-right">
                <p>
                  <a href="#supergirl">
                    NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KẾ
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
