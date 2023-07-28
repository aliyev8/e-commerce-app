import StarIcon from "../assets/icons/StarIcon";

const StarRating = ({ starCount, isCount }) => {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div>
      {stars.map((star) => (
        <StarIcon key={star} color={star <= starCount ? "#FFC416" : "grey"} />
      ))}
      {` `} {isCount && { starCount }}
    </div>
  );
};

export default StarRating;
