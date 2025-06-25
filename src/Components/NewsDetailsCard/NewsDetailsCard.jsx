import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
  const { category_id, title, thumbnail_url, details } = news;

  return (
    <div className="flex justify-center items-center mx-auto">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* News Image */}
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-64 object-cover"
        />

        {/* News Content */}
        <div className="p-6">
          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>

          {/* Details */}
          <p className="text-gray-600 leading-relaxed mb-6">{details}</p>

          {/* Back Button */}
          <Link
            to={`/category/${category_id}`}
            className="inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-300"
          >
            Back to Category
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
