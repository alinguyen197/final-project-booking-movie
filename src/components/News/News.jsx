import React from "react";
import NewsItemFilm from "./NewsItemFilm";
import NewItemReview from "./NewItemReview";
import NewItemPromotion from "./NewItemPromotion";
export default function News() {
  return (
    <section id="news">
      <div className="container">
        <div>
          <ul className="nav nav-pills mb-3 " id="pills-tab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="pills-home-tab"
                data-toggle="pill"
                href="#pills-home"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Điện Ảnh 24h
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="pills-profile-tab"
                data-toggle="pill"
                href="#pills-profile"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Review
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="pills-contact-tab"
                data-toggle="pill"
                href="#pills-contact"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Khuyến Mãi
              </a>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <NewsItemFilm />
            </div>

            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <NewItemReview />
            </div>

            <div
              className="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <NewItemPromotion />
            </div>
          </div>
        </div>
        <div className="read-more">
          <a href="#read-more">XEM THÊM</a>
        </div>
      </div>
    </section>
  );
}
