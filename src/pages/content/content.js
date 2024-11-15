import { useState, useEffect } from "react";

import { signOutAuthenticatedUserFetch } from "../../fetch-endpoint/login-and-register-fetch";
import { checkJwtToken } from "../../fetch-endpoint/jwt-token";

function Content() {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);

  useEffect(() => {
    const fetchAuthenticatedUser = async () => {
      const response = await checkJwtToken();

      if (response !== null) setAuthenticatedUser(response);
      console.log("response = ", response);

      try {
      } catch (error) {
        console.error("Error fetching authenticated user:", error);
      }
    };

    fetchAuthenticatedUser();
  }, []);
  return (
    <div>
      <div className="mb-5 text-xl font-semibold">MAIN CONTENT</div>
      {authenticatedUser === null ? (
        <a className="mt-4 bg-white p-2 text-black" href="/login">
          <span className="font-bold">LOGIN</span>
        </a>
      ) : (
        <div className="mt-4">
          <div className="mb-5">Welcome {authenticatedUser.email}</div>
          {authenticatedUser.emailVerified ? (
            <div className="mb-5">Email is verified</div>
          ) : (
            <div className="mb-5">
              Email is not verified. Click{" "}
              <a className="cursor-pointer text-blue-300 underline" href="/verify-email">here</a> to
              verify
            </div>
          )}
          <a
            className=" bg-white p-2 text-black"
            href="/content"
            onClick={async () => {
              await signOutAuthenticatedUserFetch();
            }}
          >
            <span className="font-bold">SIGNOUT</span>
          </a>
        </div>
      )}
    </div>
  );
}

export default Content;
