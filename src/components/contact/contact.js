import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AiOutlineWhatsApp, AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { FiFacebook, FiTwitter } from "react-icons/fi";

function Contact() {
  return (
    <div
      className="flex items-center justify-between px-12 py-8 max-sm:flex-wrap gap-7"
      id="contact"
    >
      <div className="flex gap-5">
        <div className="flex flex-col gap-2">
          <div className="text-gray-300">Email</div>
          <div>halo@gmail.com</div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-gray-300">Copyright</div>
          <div>© 2023 - All Rights Reserved</div>
        </div>
      </div>
      <div className="social-media flex ">
        <div className="flex flex-col gap-4">
          <div className="text-gray-300">Contact</div>
          <div className="flex gap-5">
            <AiOutlineWhatsApp className="hover:white cursor-pointer text-2xl text-gray-300" />
            <AiFillInstagram className="hover:white cursor-pointer text-2xl text-gray-300" />
            <FaTiktok className="hover:white cursor-pointer text-2xl text-gray-300" />
            <FiFacebook className="hover:white cursor-pointer text-2xl text-gray-300" />
            <FiTwitter className="hover:white cursor-pointer text-2xl text-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
