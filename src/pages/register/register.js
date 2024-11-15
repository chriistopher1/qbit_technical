import { useState } from "react";
import { useNavigate } from "react-router-dom"
import "./register.css";

import { registerFormValidationFetch } from "../../fetch-endpoint/login-and-register-fetch";

import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

function Register() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    phoneNumber: "",
    bankName: "BCA", // Set a default value for the dropdown
    bankAccountNumber: "",
    bankAccountName: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [warning, setWarning] = useState();

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center p-8">
      <div className="flex h-full">
        <img
          src="/asset/register-image.jpg"
          className="w-auto rounded-l-lg max-lg:hidden"
        />
        <div className="left-bar w-auto overflow-y-auto rounded-r-lg bg-[#1C1C1C] p-2 text-sm max-lg:rounded-lg">
          <div className="mb-4 text-center text-xl font-semibold ">
            Daftar Akun
          </div>
          <form className="mb-3 flex w-96 flex-col gap-2" method="post">
            <div className="input-container flex flex-col gap-1 px-8">
              <label className="font-medium">NAMA</label>
              <input
                type="text"
                className="h-8 rounded-lg bg-[#0F0F0F] pl-2 outline-none focus:border-2 focus:border-[#C4A484]"
                placeholder="Nama"
                autoComplete="off"
                name="userName"
                value={formData.userName}
                onChange={handleInputChange}
              ></input>
            </div>

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
            <div className="input-container flex flex-col gap-1 px-8">
              <label className="font-medium">NO WA</label>
              <input
                type="text"
                className="h-8 rounded-lg bg-[#0F0F0F] pl-2 outline-none focus:border-2 focus:border-[#C4A484]"
                placeholder="Nomor Telepon"
                autoComplete="off"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              ></input>
            </div>
            <div className="input-container flex flex-col gap-1 px-8">
              <label className="font-medium">NAMA BANK</label>
              <select
                className="h-8 rounded-lg bg-[#0F0F0F] pl-2 outline-none focus:border-2 focus:border-[#C4A484]"
                name="bankName"
                value={formData.bankName}
                onChange={handleInputChange}
              >
                <option value="BCA">BCA</option>
                <option value="Permata">Permata</option>
                <option value="OCBC">OCBC</option>
              </select>
            </div>

            <div className="input-container flex flex-col gap-1 px-8">
              <label className="font-medium">NO REK</label>
              <input
                type="text"
                className="h-8 rounded-lg bg-[#0F0F0F] pl-2 outline-none focus:border-2 focus:border-[#C4A484]"
                placeholder="Nomor Rekening"
                autoComplete="off"
                name="bankAccountNumber"
                value={formData.bankAccountNumber}
                onChange={handleInputChange}
              ></input>
            </div>
            <div className="input-container flex flex-col gap-1 px-8">
              <label className="font-medium">NAMA PEMILIK REK</label>
              <input
                type="text"
                className="h-8 rounded-lg bg-[#0F0F0F] pl-2 outline-none focus:border-2 focus:border-[#C4A484]"
                placeholder="Nama Pemilik Rekening"
                autoComplete="off"
                name="bankAccountName"
                value={formData.bankAccountName}
                onChange={handleInputChange}
              ></input>
            </div>
            <button
              type="submit"
              className=" mx-8 mt-2 bg-[#C4A484] py-2 transition duration-300 hover:bg-[#856e58]"
              onClick={async (event) => {
                event.preventDefault();

                const checkValidation = await registerFormValidationFetch(formData);

                if(checkValidation === "Registration is successful"){
                  navigate("/content");
                }

                setWarning(checkValidation);
              }}
            >
              REGISTER
            </button>
          </form>
          <a className="pl-8" href="/login">
            Sudah punya akun?{" "}
            <span className="cursor-pointer text-blue-400 hover:underline">
              Login
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

export default Register;
