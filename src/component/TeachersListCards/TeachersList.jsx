import { selectTeachers } from '../../Redux/Catalog/selectors';
import { useSelector } from 'react-redux';
import { TeachersCard } from './TeachersCard';
import { ButtonStyle, StyleList } from './TeachersList.styled';
import { useState } from 'react';

export const TeachersList = ({ setNamePopUp }) => {
  const teachersData = useSelector(selectTeachers);
  const [page, setPage] = useState(4);

  const handleLoadMore = () => {
    setPage(prevState => prevState + 4);
  };
  const cardTeachers = teachersData.slice(0, page);

  return (
    <>
      <StyleList>
        {cardTeachers.map(teacher => {
          return (
            <TeachersCard
              key={teacher.id}
              setNamePopUp={setNamePopUp}
              {...teacher}
            />
          );
        })}
      </StyleList>
      {page === cardTeachers.length && (
        <ButtonStyle type="button" onClick={handleLoadMore}>
          Learn more
        </ButtonStyle>
      )}
    </>
  );
};
