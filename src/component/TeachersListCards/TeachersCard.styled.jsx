import styled from "styled-components";

export const WrapCard = styled.li`
  width: 1184px;
  height: 328px;
  padding: 24px;
  border-radius: 24px;
  background: rgb(255, 255, 255);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 48px;
`;

export const WrapAvatar = styled.div`
  position: relative;
  width: 120px;
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
  align-items: center;
  & > :first-child {
    color: rgb(138, 138, 137);
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0%;
    text-align: left;
  }
  & > :nth-child(2) {
    display: flex;
    gap: 6px;
  }
`;
