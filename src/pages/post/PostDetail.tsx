import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PostItem from "../../components/post/PostItem";
import { getComments } from "../../services/comment";
import CommentItem from "../../components/comment/CommentItem";
// Không hiểu  <PostItem post={post as API.Post} /> 
const PostDetail = () => {
  const post = useLoaderData();
  const { id: postId } = useParams();//Dòng này sử dụng useParams để lấy tham số id từ URL
  const [comments, setComments] = useState<API.Comment[] | undefined>();
  //comments là trạng thái hiện tại của comments, và setComments là một hàm để 
  //cập nhật giá trị của comments. Trạng thái ban đầu của comments được đặt là undefined

  useEffect(() => {//useEffect chỉ được gọi một lần
    getComments(Number(postId)).then(({ data }) => {
      setComments(data);
    });
    //lấy danh sách các bình luận dựa trên postId. postId đã được trích xuất từ tham 
    //số trong URL bằng useParams. Sau khi cuộc gọi API hoàn thành và trả về kết quả, 
    //hàm setComments được gọi để cập nhật giá trị của comments với dữ liệu data
  }, []);
  return (
    <div className="w-full grid grid-cols-1 gap-10">
      <div className="grid gap-2">
        <div>
          <h2>Contents:</h2>
        </div>
        <PostItem post={post as API.Post} /> 
        {/* Hiển thị bài viết với id tương ứng ,post được chuyển đổi sang kiểu API.Post */}
      </div>
      <div className="grid gap-2">
        <div>
          <h2>Comments:</h2>
        </div>
        {comments?.map((com, i) => {
          return <CommentItem comment={com} key={i} />;
        })}
      </div>
    </div>
  );
};

export default PostDetail;
