import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/const/routes";
type PostItemProps = { post: API.Post };
const PostItem: FC<PostItemProps> = ({ post }) => {
  const navigate = useNavigate();
  const handleClickPost = (id: number) => {
    navigate(ROUTES.post + "/" + id);
  };
  return (
    <div
      className="border p-2 cursor-pointer"
      onClick={() => {
        if (post?.id) handleClickPost(post?.id);
      }}
    >
      <h4 className="text-[18px] font-bold">{post?.title}</h4>
      <p className="text-gray-700">{post?.body}</p>
    </div>
  );
};
export default PostItem;
