import React, { useState } from "react";
import {
  FaRegBookmark,
  FaBookmark,
  FaShareAlt,
  FaStar,
  FaEye,
} from "react-icons/fa";
import { format } from "date-fns";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const { _id, title, author, image_url, rating, total_view, details } = news;

  const publishedDate = new Date(author.published_date);

  // Bookmark - Only UI change
  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  // Share
  const handleShare = async () => {
    const shareData = {
      title: title,
      text: `Check out this news: ${title}`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("News link copied!");
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.log("Share failed:", error);
      }
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-sm shadow-sm">
      {/* Author Section */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-100">
        {/* Author */}
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-9 h-9 rounded-full object-cover"
          />

          <div>
            <h4 className="font-semibold text-sm text-gray-800">
              {author.name}
            </h4>

            <p className="text-xs text-gray-500">
              {format(publishedDate, "yyyy-MM-dd")}
            </p>
          </div>
        </div>

        {/* Bookmark & Share */}
        <div className="flex items-center gap-4">
          {/* Bookmark */}
          <button
            onClick={handleBookmark}
            className={`transition ${
              isBookmarked
                ? "text-orange-500"
                : "text-gray-500 hover:text-gray-800"
            }`}
            title={isBookmarked ? "Bookmarked" : "Bookmark"}
          >
            {isBookmarked ? (
              <FaBookmark size={15} />
            ) : (
              <FaRegBookmark size={15} />
            )}
          </button>

          {/* Share */}
          <button
            onClick={handleShare}
            className="text-gray-500 hover:text-gray-800 transition"
            title="Share"
          >
            <FaShareAlt size={15} />
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className="px-4 pt-3">
        {/* Title */}
        <h2 className="text-[16px] leading-6 font-bold text-gray-800">
          {title}
        </h2>

        {/* Image */}
        <div className="mt-3 bg-gray-100 rounded-sm">
          <img
            src={image_url}
            alt={title}
            className="w-full h-auto object-contain rounded-sm"
          />
        </div>

        {/* Details */}
        <div className="mt-4">
          <p className="text-[12px] leading-5 text-gray-500 line-clamp-4">
            {details}
          </p>

          {/* Read More - No functionality */}
          <Link
            to={`/news-details/${_id}`}
            className="text-orange-500 text-xs font-medium mt-1 hover:underline"
          >
            Read More
          </Link>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-3 py-3 flex items-center justify-between">
          {/* Rating */}
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-[2px] text-orange-400">
              <FaStar size={14} />
              <FaStar size={14} />
              <FaStar size={14} />
              <FaStar size={14} />
              <FaStar size={14} />
            </div>

            <span className="text-xs text-gray-600 ml-1">{rating.number}</span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-2 text-gray-500">
            <FaEye size={14} />

            <span className="text-xs">{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
