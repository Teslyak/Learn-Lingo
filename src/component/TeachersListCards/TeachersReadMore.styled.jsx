import styled, { StyleSheetManager } from 'styled-components';
export const ExperienceStyle = styled.p`
  color: rgb(18, 20, 23);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  max-width: 968px;
  margin-bottom: 32px;
`;

export const ReviewersList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 32px;
`;
export const ReviewerAvatar = styled.img`
  border-radius: 100px;
`;
export const WrapReviewerAvatar = styled.div`
  width: 44px;
  height: 44px;
  background-size: cover;
  border-radius: 100px;
  background-image: url(${props => props.avatarUrl});
  background-position: 50%;
`;

export const ReviwerLi = styled.li``;
export const ReviewerUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
`;
export const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`;
export const ReviewerListLi = styled.li`
  color: rgb(138, 138, 137);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SpanRating = styled.span`
  color: rgb(18, 20, 23);
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;

export const Comment = styled.p`
  color: rgb(18, 20, 23);

  font-size: 16px;
  font-weight: 500;
  line-height: 24px;

  text-align: left;
`;

const MyStyleSheetManager = ({ children }) => (
  <StyleSheetManager shouldForwardProp={prop => prop !== 'avatarUrl'}>
    {children}
  </StyleSheetManager>
);

export default MyStyleSheetManager;
