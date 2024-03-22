import styled from 'styled-components';

export const WrapCard = styled.li`
  width: 100%;
  padding: 24px;
  border-radius: 24px;
  background: rgb(255, 255, 255);
  display: flex;
  position: relative;
  gap: 48px;
  flex-wrap: wrap;
`;

export const WrapAvatar = styled.div`
  position: relative;
  min-width: 120px;
  height: 120px;
  border: 3px solid rgb(251, 233, 186);
  border-radius: 100px;
  background: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ImgAvatar = styled.img`
  border-radius: 100px;
  width: 96px;
  height: 96px;
`;

export const WrapSvgStatus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 19px;
  right: 17px;
  width: 12px;
  height: 12px;
`;

export const WrapDiscrp = styled.div``;

export const Statistic = styled.div``;

export const ListStatistic = styled.ul`
  display: flex;
  flex-wrap: wrap;
  div {
    display: flex;
    flex-wrap: wrap;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
    & > :nth-child(1) {
      gap: 6px;
    }

    & > :not(:last-child) {
      padding-right: 16px;
      border-right: 1px solid rgba(18, 20, 23, 0.2);
    }
    & > :nth-child(4) {
      padding-right: 0;
      padding-left: 16px;
      border-right: none;
    }
    & > :nth-child(3) {
      display: flex;
      gap: 6px;
      padding-left: 16px;
    }
    & > :nth-child(2) {
      padding-left: 16px;
    }
  }

  & > :first-child {
    color: rgb(138, 138, 137);
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0%;
    text-align: left;
    margin-right: 192px;
  }
`;
export const StyleLi = styled.li`
  display: flex;
  align-items: center;
`;

export const WrapSvgLessonBook = styled.div`
  display: flex;
  align-items: center;
`;

export const WrapStar = styled.div`
  display: flex;
  align-items: center;
`;

export const SpanPrice = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: rgb(56, 205, 62);
`;

export const WrapHeart = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 24px;
  right: 24px;
  cursor: pointer;
`;

export const NameTeacher = styled.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  margin-bottom: 32px;
`;
export const SpanDiscrp = styled.span`
  color: rgb(18, 20, 23);
  text-decoration: underline;
`;
export const WrapListDiscrp = styled.ul`
  text-align: start;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
  li:not(:first-child) > span {
    text-decoration: none;
  }
`;

export const StyleLiDiscrp = styled.li`
  //font-size: 16px;
  font-size: calc(12px + (16 - 12) * ((100vw - 320px) / (1440 - 320)));
  font-weight: 500;
  line-height: 24px;
  color: rgb(138, 138, 137);
`;
export const BtnReadMore = styled.button`
  color: rgb(18, 20, 23);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-decoration-line: underline;
  display: flex;
  margin-bottom: 32px;
  background: none;
  border: none;
  cursor: pointer;
`;

export const ListLevel = styled.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  & > :first-child {
    background: rgb(244, 197, 80);
    border: none;
  }
  margin-bottom: 32px;
`;
export const LiLevels = styled.li`
  border: 1px solid rgba(18, 20, 23, 0.2);
  border-radius: 35px;
  color: rgb(18, 20, 23);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  padding: 8px 12px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
