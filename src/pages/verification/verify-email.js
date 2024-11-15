import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { checkJwtToken } from "../../fetch-endpoint/jwt-token";
import { sendEmailVerificationToUserFetch } from "../../fetch-endpoint/login-and-register-fetch";

function VerifyEmail() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [authenticatedUser, setAuthenticatedUser] = useState();
  const [message, setMessage] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAuthenticatedUser = async () => {
      const response = await checkJwtToken();

      // console.log("response = ", response);

      if (response === null) {
        navigate("/login");
      }

      if (response.emailVerified) {
        navigate("/content");
      }

      setAuthenticatedUser(response.email);

      try {
      } catch (error) {
        console.error("Error fetching authenticated user:", error);
      }
    };

    fetchAuthenticatedUser();

    let countdownInterval;

    if (isButtonDisabled) {
      countdownInterval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }
    console.log("halo");
    return () => {
      clearInterval(countdownInterval);
    };
  }, [isButtonDisabled, message]);

  const handleSendVerification = async () => {
    const sendEmailResponse = await sendEmailVerificationToUserFetch();
    console.log("email send response = ", sendEmailResponse);
    setMessage(sendEmailResponse);
    // Disable the button
    setIsButtonDisabled(true);

    // Reset the countdown
    setCountdown(60);

    // Enable the button after 60 seconds
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 60000); // 60 seconds
  };

  return (
    <div className="flex h-screen items-center justify-center ">
      <div className="flex w-76 flex-col justify-center gap-5 rounded-lg bg-[#0F0F0F] p-8 max-md:text-sm">
        <div className="text-2xl font-semibold">Verify Email</div>
        <p>
          Login to a different account?{" "}
          <a href="/login" className="text-blue-300 hover:underline">
            here
          </a>
        </p>
        <p>Email : {authenticatedUser}</p>
        <button
          onClick={handleSendVerification}
          disabled={isButtonDisabled}
          className={`border-2 border-white p-3 px-5 font-semibold transition duration-300 ${
            isButtonDisabled
              ? "pointer-events-none"
              : "hover:bg-white hover:text-black"
          }`}
        >
          {isButtonDisabled
            ? `Please wait... (${countdown} seconds)`
            : "Send Verification"}
        </button>
        <div className="text-[#C4A484]">{message}</div>
      </div>
    </div>
  );
}

export default VerifyEmail;


