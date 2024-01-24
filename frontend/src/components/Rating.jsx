import { FaStar, FaStarHalfAlt color='yellow', FaRegStar } from "react-icons/fa";

export default function Rating({ value, text }) {
  return (
    <div className="rating">
      <span>
        {value >= 1 ? (
          <FaStar color="yellow"/>
        ) : value >= 0.5 ? (
          <FaStarHalfAlt color='yellow' />
        ) : (
          <FaRegStar color='yellow' />
        )}
      </span>
      <span>
        {value >= 2 ? (
          <FaStar color="yellow"/>
        ) : value >= 1.5 ? (
          <FaStarHalfAlt color='yellow' />
        ) : (
          <FaRegStar color='yellow' />
        )}
      </span>
      <span>
        {value >= 3 ? (
          <FaStar color="yellow"/>
        ) : value >= 2.5 ? (
          <FaStarHalfAlt color='yellow' />
        ) : (
          <FaRegStar color='yellow' />
        )}
      </span>
      <span>
        {value >= 4 ? (
          <FaStar color="yellow"/>
        ) : value >= 3.5 ? (
          <FaStarHalfAlt color='yellow' />
        ) : (
          <FaRegStar color='yellow' />
        )}
      </span>
      <span>
        {value >= 5 ? (
          <FaStar color="yellow"/>
        ) : value >= 4.5 ? (
          <FaStarHalfAlt color='yellow' />
        ) : (
          <FaRegStar color='yellow' />
        )}
      </span>

      {/* if text is available, display text */}
      <span>{text && text}</span>
    </div>
  );
}
