import { ADD_COMMENT } from "../const/commentCons";

const initialState = {
  listComment: [
    {
      name: "Xuân",
      content: "Phim này hay quá !!",
      img: "https://ruthamcauquan2.info/wp-content/uploads/2020/07/anh-gai-xinh-hap-dan-nhieu-nam-gioi-6.jpg",
    },
    {
      name: "Khoa",
      content: "Đáng giá đồng tiền",
      img: "https://img4.thuthuatphanmem.vn/uploads/2020/03/16/hinh-anh-anh-chang-dep-trai-voi-goc-nghieng-that-dep_111414726.jpg",
    },
  ],
};

export const commentReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_COMMENT:
      const newState = [...state.listComment, payload];
      state.listComment = newState;
      return { ...state };

    default:
      return { ...state };
  }
};
