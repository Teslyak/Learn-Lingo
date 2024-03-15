import { getTeachers } from "../../Redux/Catalog/operations";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TeachersList } from "../../component/TeachersListCards/TeachersList";
import { Wrap } from "./Teachers.styled";

export const Teachers = ({ setNamePopUp }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    dispatch(getTeachers({ signal: controller.signal }));
    return () => {
      return controller.abort();
    };
  }, [dispatch]);

  return (
    <Wrap>
      <TeachersList setNamePopUp={setNamePopUp} />
    </Wrap>
  );
};
