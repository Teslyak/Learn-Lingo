import BaseModalWrap from "../WrapPopUp/WrapPopUp";
import { ModalWrap } from "./ModalTrialLesson.styled";

export const ModalTrialLesson = ({ onClose }) => {
  return (
    <>
      <BaseModalWrap onClose={onClose}>
        <ModalWrap>
          <h2>Book trial lesson</h2>
        </ModalWrap>
        ;
      </BaseModalWrap>
      ;
    </>
  );
};
