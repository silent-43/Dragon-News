import React from "react";
import { Link, useParams } from "react-router";
import swimmingImage from "../assets/qZone1.png";
import classImage from "../assets/qZone2.png";
import playGroundImage from "../assets/qZone3.png";

const QZoneDetails = () => {
  const { id } = useParams();

  const qZoneItems = [
    {
      id: "1",
      image: swimmingImage,
      title: "Swimming",
      description:
        "Swimming is a great way to stay active, healthy, and refreshed. Our swimming facilities provide a comfortable environment where people can enjoy swimming, improve their skills, and maintain a healthy lifestyle.",
      details:
        "Our swimming zone is designed for both beginners and experienced swimmers. It provides an enjoyable environment for exercise, relaxation, and learning. Regular swimming can help improve stamina, flexibility, strength, and overall fitness. Whether you want to learn swimming or simply enjoy some refreshing time in the water, this zone is a great place to spend your time.",
    },

    {
      id: "2",
      image: classImage,
      title: "Class",
      description:
        "Our classes provide a friendly and engaging learning environment where students can develop their knowledge, skills, and confidence.",
      details:
        "The class environment is designed to encourage learning, creativity, and collaboration. Students can participate in different activities, communicate with others, and improve their knowledge through practical and engaging lessons. Our goal is to create an environment where everyone feels comfortable learning and developing new skills.",
    },

    {
      id: "3",
      image: playGroundImage,
      title: "Play Ground",
      description:
        "The playground is a perfect place for outdoor activities, sports, games, and spending quality time with friends and family.",
      details:
        "Our playground provides a spacious and enjoyable environment for different outdoor activities. Playing outdoors helps improve physical fitness, teamwork, communication, and mental well-being. Children and adults can enjoy various games and activities while spending quality time together in a healthy environment.",
    },
  ];

  const selectedItem = qZoneItems.find((item) => item.id === id);

  if (!selectedItem) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-error mb-3">
            Q-Zone Not Found
          </h2>

          <Link to="/" className="btn btn-secondary">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 py-10">
      <div className="w-11/12 max-w-4xl mx-auto">
        {/* Details Card */}
        <div className="bg-base-100 rounded-xl shadow-lg overflow-hidden">
          {/* Image */}
          <img
            src={selectedItem.image}
            alt={selectedItem.title}
            className="w-full max-h-[450px] object-cover"
          />

          {/* Content */}
          <div className="p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {selectedItem.title}
            </h1>

            <p className="text-lg text-gray-600 leading-8 mb-5">
              {selectedItem.description}
            </p>

            <div className="border-t border-gray-200 pt-5">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                About {selectedItem.title}
              </h2>

              <p className="text-gray-600 leading-8">{selectedItem.details}</p>
            </div>

            {/* Back */}
            <div className="mt-7">
              <Link to="/" className="btn btn-secondary">
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QZoneDetails;
