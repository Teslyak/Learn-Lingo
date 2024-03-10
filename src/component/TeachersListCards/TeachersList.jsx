import { selectTeachers } from "../../Redux/Catalog/selectors";
import { useDispatch, useSelector } from "react-redux";
import { TeachersCard } from "./TeachersCard";
import { ButtonStyle, StyleList } from "./TeachersList.styled";
import { useState } from "react";

export const TeachersList = () => {
  const teachersData = useSelector(selectTeachers);
  const [page, setPage] = useState(4);
  const disputch = useDispatch();
  const handleLoadMore = () => {
    setPage((prevState) => prevState + 4);
    disputch(teachersData.slice(0, page));
  };
  const cardTeachers = teachersData.slice(0, page);

  return (
    <>
      <StyleList>
        {cardTeachers.map((teacher) => {
          return <TeachersCard key={teacher.id} {...teacher} />;
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
