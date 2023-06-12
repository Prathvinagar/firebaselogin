import React from "react";
// import { getDatabase, ref, set } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";

// const db = getDatabase(app);

const auth = getAuth(app);

const testing = () => {
  // const putdata = () => {
  //   set(ref(db, "users/prathvi"), {
  //     id: 1,
  //     Name: "Prathvi",
  //     lastname: "nagar"
  //   });
  // };

  const signupuser = () => {
    createUserWithEmailAndPassword(
      auth,
      "prathvi@gmail.com",
      "prathvi123"
    ).then((value) => console.log(value));
  };

  return (
    <>
      <div>testing</div>
      {/* <button onClick={putdata}>Put-data</button> */}
      <button onClick={signupuser}>create user</button>
    </>
  );
};
export default testing;
