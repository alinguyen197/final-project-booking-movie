import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  BOOKING_MOVIE_TICKET,
  CHOICE_CHAIR,
  GET_BOOKING_LIST_CHAIR,
} from "../../redux/const/bookingConst";
import { useHistory } from "react-router-dom";
export default function Booking() {
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
    state.listChair?.map((value, index) => {
      total += value.giaVe;
    });
    return total;
  };
  console.log(state.listChair);
  const handleSubmit = (bookingCode, listChairDangChon, history) => {
    console.log(listChairDangChon);
    if (listChairDangChon.length == 0) {
      alert("Vui long chon ghe !!");
    } else {
      dispatch({
        type: BOOKING_MOVIE_TICKET,
        bookingCode,
        listChairDangChon,
        history,
      });
    }
  };

  return (
    <section>
      <div style={{ height: 60 }}></div>
      <div id="booking-page">
        <div className="overlay">
          <div className="mid">
            <div className="container ">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-8">
                  <div className="bookingChair">
                    <div className="screen text-center">SCREEN</div>
                    <div className="note">
                      <div>
                        <p>
                          <span className="note-signal-disable"></span>
                          Ghế đã đặt
                        </p>
                        <p>
                          <span className="note-signal-available"></span>
                          Ghế trống
                        </p>
                        <p>
                          <span className="note-signal-booking"></span>
                          Ghế đang chọn
                        </p>
                      </div>
                    </div>
                    <div className="listchair">
                      {bookingListChair.danhSachGhe?.map((chair, index) => {
                        return (
                          <button
                            disabled={chair.daDat}
                            onClick={() => handleChoiceChair(chair.maGhe)}
                            className={chair.dangChon ? "choice" : "chair"}
                          >
                            {chair.tenGhe}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-4">
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
                          {bookingListChair.thongTinPhim?.ngayChieu}-
                          {bookingListChair.thongTinPhim?.gioChieu}
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

                      <span className=" bill-content total">{tinhTien()}</span>
                    </p>
                    <div style={{ width: "100%" }}>
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
    </section>
  );
}
