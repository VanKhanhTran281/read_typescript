import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/const/routes";
type PostItemProps = { post: API.Post };//Định nghĩa kiểu dữ liệu PostItemProps 
//Trong trường hợp này, kiểu dữ liệu này chỉ có một thuộc tính là post có kiểu là API.Post.
const PostItem: FC<PostItemProps> = ({ post }) => {//khai báo một biến PostItem là một functional component (FC) 
  //và gán cho nó một hàm arrow function. Hàm này nhận một đối số { post } được truyền vào thông qua 
  //destructuring assignment. Biến post được trích xuất từ đối số đó
  const navigate = useNavigate();
  const handleClickPost = (id: number) => {
    navigate(ROUTES.post + "/" + id);
  };
  //Hàm handleClickPost nhận một đối số id có kiểu số number được sử dụng để xử lý sự kiện 
  //khi người dùng nhấp chuột vào một bài viết, hàm này sẽ thực hiện điều hướng chuyển trang bằng cách 
  //gọi phương thức navigate với đường dẫn tương ứng với bài viết được nhấp vào
  return (
    <div
      className="border p-2 cursor-pointer"
      onClick={() => {
        if (post?.id) handleClickPost(post?.id);//kiểm tra xem thuộc tính id có tồn tại trong đối tượng post hay không. 
        //Nếu có, nó gọi hàm handleClickPost để xử lý sự kiện với giá trị id là đối số. 
        //Điều này đảm bảo rằng chỉ khi post có thuộc tính id, việc điều hướng sẽ xảy ra khi người dùng nhấp chuột vào bài viết
      }}
    >
      <h4 className="text-[18px] font-bold">{post?.title}</h4>
      <p className="text-gray-700">{post?.body}</p>
    </div>
  );
};
export default PostItem;
