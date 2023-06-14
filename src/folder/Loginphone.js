import React from "react";
import { app } from "./firebase";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ref as fireRef, child, get } from "firebase/database";
import { useState } from "react";
import { database as db } from "./firebase";

function Loginphone() {
  
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");

  const handleMobile = (e) => {
    setMobile(e.target.value);
  };


  const auth = getAuth();

  const fetchData = async () => {
    const dbRef = fireRef(db);
    get(child(dbRef, `users/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const users = snapshot.val();
          const userValues = Object.values(users);
          console.log("Users:", userValues);

          const search = userValues.find((i) => i.mobile === mobile);

          // let encrypted = SHA256(password).toString();
          // console.log("Hashing password " + encrypted);

          if (search && search.mobile === mobile) {
             navigate("/home");
            console.log("signup user");
          }
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onSignInSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div>
      <h2>Welcome to india</h2>

      <form onSubmit={onSignInSubmit}>
        <div id="recaptcha-container"></div>
        <label>Phone no</label>
        <input placeholder="Mobile-no" value={mobile} onChange={handleMobile}></input>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Loginphone;
