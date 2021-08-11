import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import popupInfor from "../../assets/img/popup.png";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  BOOKING_MOVIE_TICKET,
  CHOICE_CHAIR,
  GET_BOOKING_LIST_CHAIR,
} from "../../redux/const/bookingConst";
import { useHistory } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header2 from "../../components/Header/Header2";
import Time from "react-time-format";

export default function Booking() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(59);
  const [state, setState] = useState({
    listChair: [],
  });
  const { bookingCode } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const callBookingListChair = (bookingCode) => {
    dispatch({
      type: GET_BOOKING_LIST_CHAIR,
      payload: bookingCode,
    });
  };

  useEffect(() => {
    callBookingListChair(bookingCode);
  }, []);

  useEffect(() => {
    let myInterval = setInterval(() => {
      // kiểm tra giây
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);

          console.log("render");
          Swal.fire({
            imageUrl: popupInfor,
            html: "Hết thời gian giữ ghế",
            confirmButtonColor: "#d33",
            imageHeight: 70,
            imageWidth: 120,
          }).then((result) => {
            if (result.isConfirmed) {
              callBookingListChair(bookingCode);
              setSeconds(30);
            }
          });
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  const { bookingListChair } = useSelector((state) => state.bookingReducer);

  const handleChoiceChair = (maGhe) => {
    dispatch({
      type: CHOICE_CHAIR,
      payload: maGhe,
    });
    setState({
      listChair: bookingListChair.danhSachGhe?.filter((ghe) => ghe.dangChon),
    });
  };
  const tinhTien = () => {
    let total = 0;
    state.listChair?.map((value) => {
      return (total += value.giaVe);
    });
    return total;
  };

  const renderListChair = () => {
    return bookingListChair?.danhSachGhe?.map((chair, index) => {
      let classLoaiGhe = chair.loaiGhe === "Vip" ? "chairVip" : "";
      let classDaDat = chair.daDat ? "chairDisable" : "";
      let classDangChon = chair.dangChon ? "choice" : "";
      let classContentofDaDat = chair.daDat ? "X" : chair.tenGhe;
      return (
        <>
          <button
            key={index}
            disabled={chair.daDat}
            onClick={() => handleChoiceChair(chair.maGhe)}
            className={`chair ${classLoaiGhe} ${classDaDat} ${classDangChon} `}
          >
            {classContentofDaDat}
          </button>
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </>
      );
    });
  };

  const handleSubmit = (bookingCode, listChairDangChon, history) => {
    if (listChairDangChon.length === 0) {
      Swal.fire({
        imageUrl: popupInfor,
        html: "Vui lòng chọn ghế",
        confirmButtonColor: "#d33",
        imageHeight: 70,
        imageWidth: 120,
      });
      return;
    } else {
      Swal.fire({
        icon: "warning",
        html: `Bạn chắc chắn muốn đặt ?`,
        showCancelButton: true,
        cancelButtonText: "Không đặt nữa",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Có, tôi muốn đặt",
      }).then((result) => {
        dispatch({
          type: BOOKING_MOVIE_TICKET,
          bookingCode,
          listChairDangChon,
          history,
        });
        if (result.isConfirmed) {
          Swal.fire({
            icon: "success",
            html: "Đặt vé thành công",
            showCancelButton: true,
            confirmButtonColor: "#00ac4d",
            cancelButtonColor: "#d33",
            cancelButtonText: "Về Home",
            confirmButtonText: "Đặt vé tiếp",
          }).then((result) => {
            if (result.isConfirmed) {
              setState({ listChair: [] });
              callBookingListChair(bookingCode);
            } else {
              history.push("/");
            }
          });
        }
      });
    }
  };

  return (
    <section>
      <Header2 />
      <div style={{ height: 60 }}></div>
      <div id="booking-page">
        <div className="overlay">
          <div className="mid">
            <div className="container ">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                  <div className="bookingChair">
                    <div className="text-center clockCountDown mb-3">
                      <p style={{ marginBottom: 10 }}>Thời gian giữ ghế</p>
                      <span
                        style={{
                          backgroundColor: "#9a9a9a",
                          color: "#fff",
                          padding: 10,
                          borderRadius: 3,
                        }}
                      >{`0${minutes}`}</span>{" "}
                      :{" "}
                      <span
                        style={{
                          backgroundColor: "#9a9a9a",
                          color: "#fff",
                          padding: 10,
                          borderRadius: 3,
                        }}
                      >
                        {seconds < 10 ? `0${seconds}` : seconds}
                      </span>
                    </div>
                    <div className="screen text-center">SCREEN</div>
                    <div className="note">
                      <div>
                        <p>
                          <span className="note-signal-disable"></span>
                          Ghế đã đặt
                        </p>
                        <p>
                          <span className="note-signal-available"></span>
                          Ghế Thường
                        </p>
                        <p>
                          <span className="note-signal-vip"></span>
                          Ghế Vip
                        </p>
                        <p>
                          <span className="note-signal-booking"></span>
                          Ghế đang chọn
                        </p>
                      </div>
                    </div>
                    <div className="listchair">
                      <div style={{ width: 450, margin: "0 auto" }}>
                        {renderListChair()}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                  <div className="infor">
                    <div className="infor-left">
                      <img
                        src={bookingListChair.thongTinPhim?.hinhAnh}
                        alt=""
                      />
                    </div>
                    <div className="infor-right">
                      <p className="title">
                        {bookingListChair.thongTinPhim?.tenPhim}
                      </p>
                      <p className="time">
                        <span>
                          {bookingListChair.thongTinPhim?.ngayChieu} -{" "}
                          {bookingListChair.thongTinPhim?.gioChieu} -{" "}
                          {bookingListChair.thongTinPhim?.tenRap}
                        </span>
                      </p>
                      <p className="cinemaname">
                        {bookingListChair.thongTinPhim?.tenCumRap}
                      </p>
                      <p className="address">
                        {bookingListChair.thongTinPhim?.diaChi}
                      </p>
                    </div>
                  </div>
                  <div className="bill">
                    <div>
                      <p>
                        <span className="bill-title">Ghế đang đặt :</span>
                        {state.listChair?.map((chair, index) => {
                          return (
                            <span key={index} className=" bill-content chair">
                              {chair.tenGhe}
                              {" ,"}
                            </span>
                          );
                        })}
                      </p>
                      <p>
                        <span className="bill-title">Tổng tiền :</span>

                        <span className=" bill-content total">
                          {tinhTien()}
                        </span>
                      </p>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="bill-btn"
                        style={{ width: "100%" }}
                        onClick={() =>
                          handleSubmit(bookingCode, state.listChair, history)
                        }
                      >
                        Đặt vé
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}
