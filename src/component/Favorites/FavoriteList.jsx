import { useSelector } from "react-redux";
import { selectFavorite } from "../../Redux/Catalog/selectors";
import { TeachersCard } from "../TeachersListCards/TeachersCard";
import { StyleList } from "../TeachersListCards/TeachersList.styled";

export const FavoriteList = () => {
  const favorites = useSelector(selectFavorite);

  return (
    <StyleList>
      {favorites.map((teacher) => {
        return <TeachersCard key={teacher.id} {...teacher} />;
      })}
    </StyleList>
  );
};
