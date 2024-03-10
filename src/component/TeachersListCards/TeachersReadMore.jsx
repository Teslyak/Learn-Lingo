import propTypes from "prop-types";
import { StarCard } from "../../assets/icons/StarCard";
import {
  Comment,
  ExperienceStyle,
  ReviewerListLi,
  ReviewerUl,
  ReviewersList,
  ReviwerLi,
  SpanRating,
  WrapReviewerAvatar,
  Wrapper,
} from "./TeachersReadMore.styled";

export const TeachersReadMore = ({ experience, reviews }) => {
  return (
    <>
      <ExperienceStyle>{experience}</ExperienceStyle>
      <ReviewersList>
        {reviews.map((review, idx) => (
          <ReviwerLi key={idx}>
            <Wrapper>
              <div>
                <WrapReviewerAvatar
                  avatarUrl={review.reviewer_avatar}
                ></WrapReviewerAvatar>
              </div>

              <ReviewerUl>
                <ReviewerListLi>{review.reviewer_name}</ReviewerListLi>
                <ReviewerListLi>
                  <StarCard />
                  <SpanRating> {review.reviewer_rating}</SpanRating>
                </ReviewerListLi>
              </ReviewerUl>
            </Wrapper>

            <Comment>{review.comment}</Comment>
          </ReviwerLi>
        ))}
      </ReviewersList>
    </>
  );
};

TeachersReadMore.propTypes = {
  experience: propTypes.string,
  reviews: propTypes.arrayOf(
    propTypes.shape({
      comment: propTypes.string,
      reviewer_name: propTypes.string,
      reviewer_rating: propTypes.number,
    })
  ),
};
