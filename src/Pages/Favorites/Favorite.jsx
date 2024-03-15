import { useSelector } from "react-redux";
import { FavoriteList } from "../../component/Favorites/FavoriteList";
import { Wrap } from "./Favorite.styled";
import { selectFavorite } from "../../Redux/Catalog/selectors";
import { NoFavorites } from "../../component/Favorites/NoFavorites";

export const Favorites = () => {
  const favorites = useSelector(selectFavorite);

  return (
    <Wrap>{favorites.length > 0 ? <FavoriteList /> : <NoFavorites />}</Wrap>
  );
};
