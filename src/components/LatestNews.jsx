import React from "react";
import * as MarqueeModule from "react-fast-marquee";

const Marquee = MarqueeModule.default.default;

const LatestNews = ({ data }) => {
  return (
    <div className="flex items-center bg-base-200 gap-3 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2 shrink-0">Latest</p>

      <Marquee speed={40} pauseOnHover={true}>
        {data.map((news) => (
          <p key={news._id} className="font-semibold mr-10">
            {news.title}
          </p>
        ))}
      </Marquee>
    </div>
  );
};

export default LatestNews;
