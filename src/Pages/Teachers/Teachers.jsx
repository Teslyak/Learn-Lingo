import { getTeachers } from "../../Redux/Catalog/operations";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TeachersList } from "../../component/TeachersListCards/TeachersList";
import { Wrap } from "./Teachers.styled";

export const Teachers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeachers());
  }, [dispatch]);

  return (
    <Wrap>
      <TeachersList />
    </Wrap>
  );
};
