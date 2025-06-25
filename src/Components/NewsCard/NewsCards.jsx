import { FaStar, FaEye, FaRegBookmark, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsCard = ({ news }) => {
  const { title, author, rating, total_view, thumbnail_url, details, id } =
    news;

  return (
    <div className="card shadow-xl bg-base-100 ">
      <div className="flex items-center justify-between p-4  bg-base-200">
        <div className="flex items-center space-x-3 ">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <button className="flex gap-3">
          <FaRegBookmark size={20}></FaRegBookmark>
          <FaShareAlt size={20}></FaShareAlt>
        </button>
      </div>

      <figure>
        <img
          src={thumbnail_url}
          alt="Thumbnail"
          className="w-full  object-cover"
        />
      </figure>

      <div className="card-body space-y-3">
        <h2 className="card-title text-lg">{title}</h2>
        <p className="text-sm text-gray-700">
          {details.length > 200 ? (
            <>
              {details.slice(0, 200)}... <br />
              <Link
                to={`/news-details/${id}`}
                className="text-blue-500 font-semibold cursor-pointer underline "
              >
                Reed more
              </Link>
            </>
          ) : (
            details
          )}
        </p>
        <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <FaStar className="text-orange-400" /> {rating.number}
          </div>
          <div className="flex items-center gap-1">
            <FaEye /> {total_view}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
