import React, { useEffect } from "react";
import OtpInput from "react-otp-input";
import "./otp.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Otp = () => {
  const navigate = useNavigate();
  let data = localStorage.getItem("data");
  const [genOtp, setgenOtp] = useState(data);

  const [otp, setOtp] = useState("");
  const [seconds, setSeconds] = useState(30);

  const verifyOtp = () => {
    const flage = otp == genOtp;

    if (flage) {
      navigate("/home");
    }
  };

  const timer = () => {
    setTimeout(() => {
      localStorage.clear("data");
      setgenOtp("");
      console.log("new data", genOtp);
    }, 30000);
  };

  useEffect(() => {
    timer();
  }, []);

  const resendOtp = () => {
    localStorage.clear("data");
    setSeconds(30);
    let newData = Math.floor(100000 + Math.random() * 1000);
    setgenOtp(newData);
    console.log("resendPass", newData);
    timer();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);
    if (seconds === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <>
      <div className="mainotpdiv">
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div className="Otpdiv">
            <h1>Otp Screen</h1>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderInput={(props) => (
                <input {...props} className={"otpinput"} />
              )}
            />
            Timer: {seconds < 30 ? seconds : "0"}
            <div className="otpbtn">
              <button onClick={verifyOtp}>Submit</button>
              <button onClick={resendOtp}>Resend-Otp</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otp;

// useEffect(() => {
//   const interval = setInterval(() => {
//     setSeconds((prevSeconds) => prevSeconds + 1);
//   }, 1000);

//   // Cleanup the interval on component unmount
//   return () => clearInterval(interval);
// }, []);
