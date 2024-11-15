import { useState } from "react";
import { useNavigate } from "react-router-dom"
import "./login.css";

import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { loginFormValidationFetch } from "../../fetch-endpoint/login-and-register-fetch";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [warning, setWarning] = useState();

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center p-10">
      <div className="flex h-full">
        <img
          src="/asset/register-image.jpg"
          className="w-auto rounded-l-lg max-lg:hidden"
        />
        <div className="left-bar w-auto overflow-y-auto rounded-r-lg bg-[#1C1C1C] p-2 text-sm max-lg:rounded-lg">
          <div className="mb-4 text-center text-xl font-semibold ">
            Selamat Datang
          </div>
          <form className="mb-3 flex w-96 flex-col gap-2">
            <div className="input-container flex flex-col gap-1 px-8">
              <label className="font-medium">EMAIL</label>
              <input
                type="email"
                className="h-8 rounded-lg bg-[#0F0F0F] pl-2 outline-none focus:border-2 focus:border-[#C4A484]"
                placeholder="Email"
                autoComplete="off"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              ></input>
            </div>
            <div className="input-container flex flex-col gap-1 px-8">
              <label className="font-medium">PASSWORD</label>
              <div
                className="password-input flex items-center justify-between rounded-lg bg-[#0F0F0F] pr-4"
                id="password-input"
              >
                <input
                  type={showPassword ? "text" : "password"}
                  className="h-8 w-full rounded-lg bg-[#0F0F0F] pl-2 outline-none"
                  placeholder="Password"
                  autoComplete="off"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <span
                  className="password-toggle cursor-pointer text-xl"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className=" mx-8 mt-2 bg-[#C4A484] py-2 transition duration-300 hover:bg-[#856e58]"
              onClick={async (event) => {
                event.preventDefault();
                
                const response = await loginFormValidationFetch(formData);

                if(response === "Login success"){
                  navigate("/content");
                }

                setWarning(response);
              }}
            >
              LOGIN
            </button>
          </form>
          <a className="pl-8" href="/register">
            Belum punya akun?{" "}
            <span className="cursor-pointer text-blue-400 hover:underline">
              Daftar
            </span>
          </a>
          <p className="px-8 text-red-400" id="warning-text">
            {warning}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
