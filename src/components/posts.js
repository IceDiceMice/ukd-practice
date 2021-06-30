import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Main from "./main";
import { Addpost, Deletepost } from "../actions/types";
const Posts = () => {
  const [text, setText] = useState("");

  const posts = useSelector((state) => state.postsReducer);
  const dispatch = useDispatch();
  console.log(posts);

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { id: new Date().getTime().toString(), text };
    dispatch({
      type: Addpost,
      payload: post,
    });
    setText("");
  };

  const removeItem = (id) => {
    dispatch({
      type: Deletepost,
      id: id,
    });
  };
  return (
    <>
      <Main />
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <textarea
              type="text"
              id="text"
              name="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            ></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
        {posts.post.map((post) => {
          const { id, text } = post;
          return (
            <div className="item" key={id}>
              <p>{text}</p>
              <button onClick={() => removeItem(id)}>Remove</button>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default Posts;
