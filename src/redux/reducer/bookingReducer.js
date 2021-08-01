import {
  BOOKING_MOVIE_TICKET_SUCCESS,
  CHOICE_CHAIR,
  GET_BOOKING_LIST_CHAIR_SUCCESS,
} from "../const/bookingConst";

const initialState = {
  bookingListChair: [],
  historyOfBooking: "",
};

export const bookingReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_BOOKING_LIST_CHAIR_SUCCESS:
      state.bookingListChair = payload;
      return { ...state };
    //xử lý chọn ghế
    case CHOICE_CHAIR:
      //clone ra object mới
      let listChair = [...state.bookingListChair.danhSachGhe];
      //tìm cái ghế đang chọn
      let index = listChair.findIndex((chair) => chair.maGhe === payload);
      if (index !== -1) {
        // 1 object trong mảng listChair
        let oldChair = listChair[index];
        let newChair = { ...oldChair, dangChon: !oldChair.dangChon };

        // gán new chair vào listChair[index]
        listChair[index] = newChair;
        // cập nhật lại listChair
        state.bookingListChair.danhSachGhe = listChair;
      }
      return { ...state };
    case BOOKING_MOVIE_TICKET_SUCCESS:
      state.historyOfBooking = payload;
      return { ...state };
    default:
      return state;
  }
};
