import { useEffect, useState } from "react";
import { getPosts } from "../../services/post";
import PostItem from "../../components/post/PostItem";

export default function Home() {
  const [popularPosts, setPopularPosts] = useState<API.Post[] | undefined>();
  //useState được gọi với giá trị ban đầu là API.Post[] | undefined 
  //cho phép popularPosts có thể là một mảng các đối tượng API.Post hoặc undefined

  useEffect(() => {
    // cuộc gọi hàm getPosts để lấy danh sách bài viết
    //_start và _limit, cho biết vị trí bắt đầu và số lượng bài viết cần lấy
    getPosts({
      _start: 0,
      _limit: 10,
    }).then((res) => {
      setPopularPosts(res.data);
      // Sau khi cuộc gọi getPosts hoàn thành và trả về kết quả, 
      //hàm setPopularPosts được gọi để cập nhật giá trị của popularPosts với dữ liệu bài viết được trả về (res.data)
    });
  }, []);
  return (
    <div className="grid gap-2 grid-cols-2">
      {popularPosts?.map((post, i) => {
        return <PostItem post={post} key={i} />;
      })}
    </div>
  );
}
