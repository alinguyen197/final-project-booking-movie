import React, { Component } from "react";

import slide1 from "../../assets/img/app/slide1.jpeg";
import slide2 from "../../assets/img/app/slide2.jpeg";
import slide3 from "../../assets/img/app/slide7.jpeg";
import slide4 from "../../assets/img/app/slide15.jpeg";
import slide5 from "../../assets/img/app/slide16.jpeg";
class App extends Component {
  render() {
    return (
      <section id="App" className="app">
        <div className="container">
          <div className="row app-main ">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xs-6 appLeft">
              <div className="app-main-left">
                <p className="app-text-left">Ứng dụng tiện lợi dành cho</p>
                <p className="app-text-left">người yêu điện ảnh</p>
                <p className="app-text-small-left">
                  Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp
                  và đổi quà hấp dẫn.
                </p>
                <button className="app-btn-left">
                  App miễn phí - Tải về ngay!
                </button>
                <p className="app-text-under">
                  TIX có hai phiên bản <a href="#IOS">IOS</a> &
                  <a href="#Android"> Android</a>
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xs-6 appRight">
              <div className="app-main-right">
                <div
                  id="carouselExampleControls"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={slide1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src={slide2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src={slide3} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src={slide4} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src={slide5} className="d-block w-100" alt="..." />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default App;
