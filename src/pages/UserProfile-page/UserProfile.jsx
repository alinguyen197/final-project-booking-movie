import React, { Component } from "react";
import img from "../../assets/img/user-profile.png";
import FormUser from "./FormUser";
import HistoryTicket from "./HistoryTicket";
import UpdateUserProfile from "./UpdateUserProfile";
import { connect } from "react-redux";
import { POST_HISTORY_OF_USER_PROFILE } from "../../redux/const/historyUserProfileConst";
import Footer from "../../components/Footer/Footer";
class UserProfile extends Component {
  render() {
    const { UserProfile } = this.props;
    return (
      <div id="user-profile">
        <div style={{ height: 60 }}></div>
        <div className="container my-5">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 user-profile-left ">
              <div className="user-img">
                <img style={{ width: "100%" }} src={img} alt="" />
              </div>
              <div className="user-name text-center">
                <p>
                  @<i>{UserProfile.taiKhoan}</i>
                </p>
              </div>
              <ul className=" nav user-nav">
                <li className="">
                  <button data-toggle="pill" href="#thongtincanhan">
                    Thông Tin Cá Nhân
                  </button>
                </li>
                <li>
                  <button data-toggle="pill" href="#thongtinlichchieu">
                    Lịch sử đặt vé
                  </button>
                </li>
                <li>
                  <button data-toggle="pill" href="#capnhatthongtin">
                    Đổi mật khẩu
                  </button>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 user-profile-right">
              <div className="user-info tab-content">
                <div id="thongtincanhan" className="tab-pane fade show active">
                  <FormUser UserProfile={UserProfile} />
                </div>
                <div id="thongtinlichchieu" className="tab-pane fade ">
                  <h3>Lịch sử đặt vé</h3>
                  <div className="scroll-ticket">
                    {UserProfile.thongTinDatVe?.map((ticket, index) => {
                      return <HistoryTicket key={index} ticket={ticket} />;
                    })}
                  </div>
                </div>
                <div id="capnhatthongtin" className="tab-pane fade ">
                  <UpdateUserProfile UserProfile={UserProfile} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  componentDidMount() {
    const taiKhoan = JSON.parse(localStorage.getItem("taiKhoan"));
    this.props.dispatch({
      type: POST_HISTORY_OF_USER_PROFILE,
      payload: taiKhoan,
    });
  }
}

const mapStateToProps = (state) => {
  return {
    UserProfile: state.historyUserProfileReducer.historyUserProfile,
  };
};

export default connect(mapStateToProps, null)(UserProfile);
