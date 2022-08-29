import React, { useState } from "react";
import "../Styles/SignUpOrLogIn.css";

export default function SignUpOrLogIn({ setIsUserLogged }) {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [isLogIn, setIsLogIn] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();
    if (mail !== "" && password !== "") {
      setIsUserLogged(true);
    }
  };

  return (
    <div className="signUp-LogIn">
      <form className="form" onClick={submitHandler}>
        <label className="title" htmlFor="mail">
          Email
        </label>
        <input
          className="inputs"
          id="mail"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          type="text"
          required
        />
        <label className="title" htmlFor="password">
          Password
        </label>
        <input
          className="inputs"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
        />
        {!isLogIn && (
          <>
            <label className="title" htmlFor="rePassword">
              Re-enter Password
            </label>
            <input
              className="inputs"
              id="rePassword"
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
              type="password"
              required
            />
          </>
        )}
        <button id="btn" type="submit">
          {isLogIn ? "Login" : "Sign up"}
        </button>
        <span onClick={() => setIsLogIn((prevState) => !prevState)} id="signUp">
          {isLogIn ? "Sign up" : "Login"}
        </span>
      </form>
    </div>
  );
}
