import { selectTeachers } from "../../Redux/Catalog/selectors";
import { useSelector } from "react-redux";
import { TeachersCard } from "./TeachersCard";
import { ButtonStyle, StyleList } from "./TeachersList.styled";

export const TeachersList = () => {
  const teachersData = useSelector(selectTeachers);

  return (
    <>
      <StyleList>
        {teachersData.map((teacher) => {
          return <TeachersCard key={teacher.id} {...teacher} />;
        })}
      </StyleList>
      <ButtonStyle type="button">Learn more</ButtonStyle>
    </>
  );
};