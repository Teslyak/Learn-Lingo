import { BtnTrialLessons } from "./BtnTrialLesson.styled";

export const BtnTrialLesson = ({ setNamePopUp }) => {
  const handleBtnTrialLesson = () => {
   
    setNamePopUp("trial");
  };
  return (
    <BtnTrialLessons onClick={handleBtnTrialLesson}>
      Book trial lesson
    </BtnTrialLessons>
  );
};
