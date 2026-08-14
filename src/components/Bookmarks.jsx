import React, { use, useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import { AuthContext } from "../provider/AuthProvider";

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const savedBookmarks =
      JSON.parse(localStorage.getItem("bookmarkedNews")) || [];

    setBookmarks(savedBookmarks);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">My Bookmarks</h1>

      {bookmarks.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500">You haven't bookmarked any news yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bookmarks.map((news) => (
            <NewsCard key={news._id} news={news} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookmarks;
