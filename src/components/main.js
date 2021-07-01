import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AddItem } from "../actions/types";

export default function Main() {
  const [redirect, setRedirect] = useState(false);
  const text = useSelector((reduxState) => reduxState?.loginReducer.text);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!text) {
      setRedirect(true);
    }
  }, [text]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({
      type: AddItem,
      payload: "",
    });
  };

  if (redirect) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <div>
        <header className="header">
          <h1 style={{ color: "#fff" }}>Hello {text}</h1>
          <button type="submit" className="exit-button" onClick={handleClick}>
            Log out
          </button>
        </header>
      </div>
      <div className="header-body">
        <Link to="/posts" className="links">
          <h1>Posts</h1>
        </Link>
        <Link to="/users" className="links">
          <h1>Users</h1>
        </Link>
      </div>
    </>
  );
}
