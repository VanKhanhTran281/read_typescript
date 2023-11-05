import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/const/routes";
type CommentItemProps = { comment: API.Comment };
const CommentItem: FC<CommentItemProps> = ({ comment }) => {
  return (
    <div className="border p-2 cursor-pointer">
      <h4 className="text-[18px] font-bold">{comment?.name}</h4>
      <h5 className="text-[16px] font-bold italic">{comment?.email}</h5>
      <p className="text-gray-700">{comment?.body}</p>
    </div>
  );
};
export default CommentItem;
