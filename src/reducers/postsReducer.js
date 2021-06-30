const initialState = {
  post: [
    { id: 1, text: "newPost1" },
    { id: 2, text: "newPost2" },
    { id: 3, text: "newPost3" },
  ],
};

const postsReducer = (state = initialState, action) => {
  const { type, payload, id } = action;

  switch (type) {
    case "addPost":
      return { ...state, post: [payload, ...state.post] };

    case "deletePost":
      return { ...state, post: state.post.filter((post) => post.id !== id) };
    default:
      return state;
  }
};
export default postsReducer;
