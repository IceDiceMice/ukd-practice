import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddItem } from "../actions/types";
import { Redirect } from "react-router-dom";

export default function Login() {
  const [state, setState] = useState("");
  const [redirect, setRedirect] = useState(false);
  const text = useSelector((state) => state.loginReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    if (state.trim()) {
      dispatch({
        type: AddItem,
        payload: state,
      });
    }
  }, [state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text !== "") {
      setRedirect(true);
    }
  };

  if (redirect) {
    return <Redirect to="/main" />;
  }

  return (
    <div className="login-body">
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Login</h1>
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          placeholder="Enter your name"
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
