import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";
const Ratings = function ({ ratingsValue, text }) {
  return (
    <>
      <div className="ratings">
        <span>
          {ratingsValue >= 1 ? (
            <FaStar />
          ) : ratingsValue >= 0.5 ? (
            <FaStarHalf />
          ) : (
            <FaRegStar />
          )}
        </span>
        <span>
          {ratingsValue >= 2 ? (
            <FaStar />
          ) : ratingsValue >= 1.5 ? (
            <FaStarHalf />
          ) : (
            <FaRegStar />
          )}
        </span>
        <span>
          {ratingsValue >= 3 ? (
            <FaStar />
          ) : ratingsValue >= 2.5 ? (
            <FaStarHalf />
          ) : (
            <FaRegStar />
          )}
        </span>
        <span>
          {ratingsValue >= 4 ? (
            <FaStar />
          ) : ratingsValue >= 3.5 ? (
            <FaStarHalf />
          ) : (
            <FaRegStar />
          )}
        </span>
        <span>
          {ratingsValue >= 5 ? (
            <FaStar />
          ) : ratingsValue >= 4.5 ? (
            <FaStarHalf />
          ) : (
            <FaRegStar />
          )}
        </span>
        <span className="rating-text"> {text && text} </span>
      </div>
    </>
  );
};
export default Ratings;
