import { BtnTrialLessons } from './BtnTrialLesson.styled';
import { setCard } from '../../Redux/Catalog/slice';
import { useDispatch } from 'react-redux';

export const BtnTrialLesson = ({
  setNamePopUp,
  id,
  avatar_url,
  name,
  surname,
}) => {
  const dispatch = useDispatch();
  const handleBtnTrialLesson = () => {
    setNamePopUp('trial');
    dispatch(setCard({ id, avatar_url, name, surname }));
  };
  return (
    <BtnTrialLessons onClick={handleBtnTrialLesson}>
      Book trial lesson
    </BtnTrialLessons>
  );
};
