import propTypes from "prop-types";
import {
  ImgAvatar,
  ListStatistic,
  Statistic,
  WrapAvatar,
  WrapCard,
  WrapDiscrp,
  WrapSvgStatus,
} from "./TeachersCard.styled";
import { Status } from "../../assets/icons/Status";
import { LessonBook } from "../../assets/icons/LessonBook";
import { StarCard } from "../../assets/icons/StarCard";
export const TeachersCard = (props) => {
  const {
    avatar_url,
    conditions,
    experience,
    languages,
    lesson_info,
    lessons_done,
    levels,
    name,
    price_per_hour,
    rating,
    reviews,
    surname,
  } = props;

  return (
    <WrapCard>
      <WrapAvatar>
        <WrapSvgStatus>
          <Status />
        </WrapSvgStatus>
        <ImgAvatar src={avatar_url} alt="avatar" />
      </WrapAvatar>
      <WrapDiscrp>
        <Statistic>
          <ListStatistic>
            <li>Languages</li>
            <li>
              <div>
                <LessonBook />
              </div>
              Lessons online
            </li>
            <li>Lessons done:{lessons_done}</li>
            <li>
              <div>
                <StarCard />
                Rating: {rating}
              </div>
            </li>
            <li>Price / 1 hour:{price_per_hour}</li>
          </ListStatistic>
        </Statistic>
      </WrapDiscrp>
    </WrapCard>
  );
};

TeachersCard.propTypes = {
  avatar_url: propTypes.string,
  conditions: propTypes.arrayOf(propTypes.string),
  experience: propTypes.string,
  languages: propTypes.arrayOf(propTypes.string),
  lesson_info: propTypes.string,
  lessons_done: propTypes.number,
  levels: propTypes.arrayOf(propTypes.string),
  name: propTypes.string,
  price_per_hour: propTypes.number,
  rating: propTypes.number,
  reviews: propTypes.arrayOf(
    propTypes.shape({
      comment: propTypes.string,
      reviewer_name: propTypes.string,
      reviewer_rating: propTypes.number,
    })
  ),
  surname: propTypes.string,
};
