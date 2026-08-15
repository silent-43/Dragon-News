import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Find Us On</h2>

      <div className="join join-vertical w-full">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/karmokar.sohag/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-base-100 join-item justify-start"
        >
          <FaFacebook />
          Facebook
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/sohag-karmokar"
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-base-100 join-item justify-start"
        >
          <FaLinkedin />
          LinkedIn
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/silent-43"
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-base-100 join-item justify-start"
        >
          <FaGithub />
          GitHub
        </a>
      </div>
    </div>
  );
};

export default FindUs;
