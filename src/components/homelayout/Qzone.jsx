import React from "react";
import swimmingImage from "../../assets/qZone1.png";
import classImage from "../../assets/qZone2.png";
import playGroundImage from "../../assets/qZone3.png";

const Qzone = () => {
  return (
    <div className="bg-base-200 p-3">
      <h2 className="font-bold mb-5">Q-Zone</h2>
      <div className="space-y-5">
        <img src={swimmingImage} alt="" />
        <img src={classImage} alt="" />
        <img src={playGroundImage} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
