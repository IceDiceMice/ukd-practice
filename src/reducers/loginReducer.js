const initialState = {
  text: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addItem":
      return { ...state, text: action.payload };
    default:
      return state;
  }
};
export default loginReducer;
