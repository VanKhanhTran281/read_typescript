import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/const/routes";
type AlbumItemProps = { album: API.Album ,reload?: () => void };
const AlbumItem: FC<AlbumItemProps> = ({ album,reload }) => {
  const navigate = useNavigate();
  const handleClickAlbum = (id: number) => {
    navigate(ROUTES.album + "/" + id);
  };
  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <div
      className="border p-2 cursor-pointer"
      onClick={() => {
        if (album?.id) handleClickAlbum(album?.id);
      }}
    >
      <h4 className="text-[18px] font-bold">{album?.id}. {capitalizeFirstLetter(album?.title || "")}</h4>
    </div>
    
  );
};
export default AlbumItem ;
