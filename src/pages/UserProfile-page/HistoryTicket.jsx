import React from "react";
import qcode from "../../assets/img/4x/qcode@4x-8.png";
import cine from "../../assets/img/4x/cine@4x-8.png";
import Time from "react-time-format";

export default function HistoryTicket(props) {
  const { tenPhim, maVe, ngayDat, danhSachGhe, giaVe } = props.ticket;

  return (
    <div id="historyTicket">
      <div className="ticket">
        <div className="row">
          <div className="col-2 d-flex">
            <img style={{ width: "100%", height: "auto" }} src={qcode} alt="" />
          </div>
          <div className="col-6" style={{ borderRight: "1px dotted #666" }}>
            <div className="ticket-content">
              <p className="ticket-title">CINEMA TICKET</p>
              <p className="ticket-movie-name">{tenPhim}</p>
              <p className="ticket-movie-date">
                DATE: <Time value={ngayDat} format="DD/MM/YYYY - hh:mm" />
              </p>
              <p className="ticket-movie-address">
                ADD: {danhSachGhe[0].tenHeThongRap}
              </p>
              <p className="ticket-type">MOVIE 2D</p>
              <p className="ticket-code ">No: {maVe}</p>
            </div>
          </div>
          <div className="col-4">
            <div
              style={{ width: "50%", margin: "0 auto", textAlign: "center" }}
            >
              <img
                style={{ width: 50, height: 50, textAlign: "center" }}
                src={cine}
                alt=""
              />
            </div>
            <div className="ticket-seat">
              <p>{danhSachGhe[0].tenCumRap} </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <span className="ticket-seat-title">Ghế : </span>

                {danhSachGhe.map((chair, index) => {
                  return (
                    <span key={index} className="seat-type">
                      {chair.tenGhe},
                    </span>
                  );
                })}
              </div>
              <p>
                Price: <span className="seat-price">{giaVe}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
