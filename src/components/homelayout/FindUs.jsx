import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Find Us On</h2>
      <div className="">
        <div className="join join-vertical w-full">
          <button className="btn bg-base-100 join-item justify-start">
            <FaFacebook></FaFacebook> Facebook
          </button>
          <button className="btn bg-base-100 join-item justify-start">
            <FaLinkedin></FaLinkedin> Linkedin
          </button>
          <button className="btn bg-base-100 join-item justify-start">
            <FaGithub></FaGithub> Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
