import React from "react";
import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";
import { useEffect, ref } from "react";
import { ref as fireRef, child, get } from "firebase/database";
import { database as db } from "./firebase";
import { enc, SHA256 } from "crypto-js";

const auth = getAuth(app);

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const fetchData = async () => {
    const dbRef = fireRef(db);
    get(child(dbRef, `users/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const users = snapshot.val();
          const userValues = Object.values(users);
          console.log("Users:", userValues);

          const search = userValues.find((i) => i.email === email);

          let encrypted = SHA256(password).toString();
          console.log("Hashing password " + encrypted);

          if (search && search.password === encrypted) {
            navigate("/home");
          }
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  function findUserByEmail(e) {
    e.preventDefault();
    fetchData();

    // signInWithEmailAndPassword(auth, email, password)
    //   .then((value) => navigate("/home"))
    //   .catch((err) => alert("User Does-not exist"));
  }

  const handleSignup = (e) => {
    navigate("/signup");
  };

  const handleSignupPhoneno = (e) => {
    navigate("/loginphone");
  };

  return (
    <div className="main-div">
      <form onSubmit={(e) => findUserByEmail(e, email)}>
        <h1 className="main-text">Login-Page </h1>
        <div className="login-container">
          <input
            type="text"
            className="email-input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br />
          <input
            type="text"
            className="password-input"
            placeholder="Password"
            value={password}
            // onChange={(e) => setPassword(e.target.value)}
            onChange={handlePassword}
          ></input>
          <br />

          <button className="Btn-login" type="Submit">
            Login
          </button>
          <p style={{ fontSize: "14px" }} onClick={handleSignup}>
            signup first
          </p>
          <p style={{ fontSize: "14px" }} onClick={handleSignupPhoneno}>
            Login with Phone.no
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
