import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/const/routes";

//định nghĩa kiểu dữ liệu CommentItemProps là một đối tượng với thuộc tính comment có kiểu API.Comment. 
//cho phép truyền một đối tượng comment vào component CommentItem
type CommentItemProps = { comment: API.Comment };

//Dòng này định nghĩa component CommentItem dưới dạng functional component (FC). 
//Component này nhận vào một đối tượng comment thông qua destructuring assignment, 
//sử dụng kiểu dữ liệu CommentItemProps đã được định nghĩa trước đó
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
