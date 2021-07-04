const initialState = {
  ListMovie: [],
};

export const ListMovieReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "":
      return { ...state };
    default:
      return { ...state };
  }
};
