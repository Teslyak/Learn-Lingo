import { getTeachers } from "../../Redux/Catalog/operations";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TeachersCard } from "../../TeachersListCards/TeachersCard";

export const Teachers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeachers());
  }, [dispatch]);

  return <TeachersCard />;
};
