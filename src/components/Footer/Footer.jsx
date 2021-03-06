import React, { Component } from "react";
import cgv from "../../assets/img/icon-footer/cgv.png";
import bhd from "../../assets/img/icon-footer/bhd.png";
import galaxy from "../../assets/img/icon-footer/galaxycine.png";
import cinesta from "../../assets/img/icon-footer/cinestar.png";
import mega from "../../assets/img/icon-footer/megags.png";
import beta from "../../assets/img/icon-footer/bt.jpeg";
import dongda from "../../assets/img/icon-footer/dongdacinema.png";
import touch from "../../assets/img/icon-footer/TOUCH.png";
import cnx from "../../assets/img/icon-footer/cnx.jpeg";
import lotte from "../../assets/img/icon-footer/lotte.png";
import starlight from "../../assets/img/icon-footer/STARLIGHT.png";
import dns from "../../assets/img/icon-footer/dcine.png";
import zalo from "../../assets/img/icon-footer/zalopay_icon.png";
import payoo from "../../assets/img/icon-footer/payoo.jpeg";
import vcb from "../../assets/img/icon-footer/VCB.png";
import arg from "../../assets/img/icon-footer/AGRIBANK.png";
import viettin from "../../assets/img/icon-footer/VIETTINBANK.png";
import ivb from "../../assets/img/icon-footer/IVB.png";
import go from "../../assets/img/icon-footer/123go.png";
import laban from "../../assets/img/icon-footer/laban.png";
import apple from "../../assets/img/icon-footer/apple-logo.png";
import android from "../../assets/img/icon-footer/android-logo.png";
import fb from "../../assets/img/icon-footer/facebook-logo.png";
import zl from "../../assets/img/icon-footer/zalo-logo.png";
import zion from "../../assets/img/icon-footer/zion-logo.jpeg";
import bocongthuong from "../../assets/img/icon-footer/d1e6bd560daa9e20131ea8a0f62e87f8.png";
export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xs-4 footer-tix">
              <div className="row">
                <div className="col-12">
                  <p className="footer-title">TIX</p>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-6 col-lg-6 col-md-12 col-sm-12 col-12 footer-tix-left">
                  <p className="footer-text-content">FAQ</p>
                  <p className="footer-text-content">Brand Guidelines</p>
                </div>
                <div className="col-xs-6 col-lg-6 col-md-12 col-sm-12 col-12  footer-tix-right">
                  <p className="footer-text-content">Tho??? thu???n b???o m???t</p>
                  <p className="footer-text-content">Ch??nh s??ch s??? d???ng</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xs-4 footer-partner">
              <div className="row">
                <div className="col-12">
                  <p className="footer-title">?????I T??C</p>
                </div>
                <div className="col-12">
                  <div className="footer-partner-icon">
                    <a href="#cgv">
                      <img src={cgv} alt="" />
                    </a>
                    <a href="#bhd">
                      <img src={bhd} alt="" />
                    </a>
                    <a href="#galaxy">
                      <img src={galaxy} alt="" />
                    </a>
                    <a href="#cinesta">
                      <img src={cinesta} alt="" />
                    </a>
                    <a href="#lotte">
                      <img src={lotte} alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-12">
                  <div className="footer-partner-icon">
                    <a href="#mega">
                      <img src={mega} alt="" />
                    </a>
                    <a href="#beta">
                      <img src={beta} alt="" />
                    </a>
                    <a href="#dongda">
                      <img src={dongda} alt="" />
                    </a>
                    <a href="#touch">
                      <img src={touch} alt="" />
                    </a>
                    <a href="#cnx">
                      <img src={cnx} alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-12">
                  <div className="footer-partner-icon">
                    <a href="#starlight">
                      <img src={starlight} alt="" />
                    </a>
                    <a href="#dns">
                      <img src={dns} alt="" />
                    </a>
                    <a href="#zalo">
                      <img src={zalo} alt="" />
                    </a>
                    <a href="#payoo">
                      <img src={payoo} alt="" />
                    </a>
                    <a href="#vcb">
                      <img src={vcb} alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-12">
                  <div className="footer-partner-icon">
                    <a href="#arg">
                      <img src={arg} alt="" />
                    </a>
                    <a href="#viettin">
                      <img src={viettin} alt="" />
                    </a>
                    <a href="#ivb">
                      <img src={ivb} alt="" />
                    </a>
                    <a href="#go">
                      <img src={go} alt="" />
                    </a>
                    <a href="#laban">
                      <img src={laban} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xs-4 footer-social">
              <div className="row">
                <div className="col-6 footer-social-phone">
                  <p className="footer-title">MOBIE APP</p>
                  <a href="#apple">
                    <img src={apple} alt="" />
                  </a>
                  <a href="#android">
                    <img src={android} alt="" />
                  </a>
                </div>
                <div className="col-xs-6 col-lg-6 col-md-12 col-sm-12   footer-social-app">
                  <p className="footer-title">SOCIAL</p>
                  <a href="#fb">
                    <img src={fb} alt="" />
                  </a>
                  <a href="#zl">
                    <img src={zl} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr style={{ backgroundColor: "#9b9b9b" }} />
          <div className="row">
            <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xs-2 footer-infor-contact-left">
              <div>
                <img src={zion} alt="" />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xs-8 footer-infor-contact-center">
              <span className="footer-infor-contact-title ">
                TIX ??? S???N PH???M C???A C??NG TY C??? PH???N ZION
              </span>
              <span>
                ?????a ch???: Z06 ???????ng s??? 13, Ph?????ng T??n Thu???n ????ng, Qu???n 7, Tp. H???
                Ch?? Minh, Vi???t Nam.
              </span>
              <span>Gi???y ch???ng nh???n ????ng k?? kinh doanh s???: 0101659783,</span>
              <span>
                ????ng k?? thay ?????i l???n th??? 30, ng??y 22 th??ng 01 n??m 2020 do S??? k???
                ho???ch v?? ?????u t?? Th??nh ph??? H??? Ch?? Minh c???p.
              </span>
              <span>S??? ??i???n Tho???i (Hotline): 1900 545 436</span>
              <span>
                Email: <a href="#support">support@tix.vn</a>{" "}
              </span>
            </div>
            <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xs-2 footer-infor-contact-right">
              <div>
                <img src={bocongthuong} alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
