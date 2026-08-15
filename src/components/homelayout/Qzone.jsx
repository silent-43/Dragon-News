import React from "react";
import { Link } from "react-router";
import swimmingImage from "../../assets/qZone1.png";
import classImage from "../../assets/qZone2.png";
import playGroundImage from "../../assets/qZone3.png";

const Qzone = () => {
  const qZoneItems = [
    {
      id: 1,
      image: swimmingImage,
      title: "Swimming",
      description:
        "Enjoy a refreshing swimming experience and stay active and healthy.",
    },
    {
      id: 2,
      image: classImage,
      title: "Class",
      description:
        "Discover our learning environment designed for knowledge and growth.",
    },
    {
      id: 3,
      image: playGroundImage,
      title: "Play Ground",
      description:
        "A perfect place for outdoor activities, games, and quality time.",
    },
  ];

  return (
    <div className="bg-base-200 rounded-lg p-4 shadow-sm">
      {/* Header */}
      <div className="mb-5">
        <h2 className="text-xl font-bold text-gray-800">Q-Zone</h2>

        <p className="text-xs text-gray-500 mt-1">
          Explore our featured activities
        </p>
      </div>

      {/* Q-Zone Items */}
      <div className="space-y-5">
        {qZoneItems.map((item) => (
          <div
            key={item.id}
            className="bg-base-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover hover:scale-105 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-3">
              <h3 className="font-bold text-gray-800 text-sm">{item.title}</h3>

              <p className="text-xs text-gray-500 leading-5 mt-1">
                {item.description}
              </p>

              {/* Learn More */}
              <Link
                to={`/q-zone/${item.id}`}
                className="group inline-flex items-center gap-1.5 mt-3 px-3 py-1.5 rounded-md bg-secondary text-white text-xs font-semibold transition-all duration-300 hover:bg-orange-600 hover:shadow-sm"
              >
                <span>Learn More</span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Qzone;
