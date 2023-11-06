import { useEffect, useState } from "react";
import Pagination from "../../components/pagination";
import { getPosts } from "../../services/post";
import PostItem from "../../components/post/PostItem";
import Loading from "../../components/loading";

const Post = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<API.Post[] | undefined>();
  //useState được gọi với giá trị ban đầu là API.Post[] | undefined 
  //cho phép popularPosts có thể là một mảng các đối tượng API.Post hoặc undefined
  const [pagination, setPagination] = useState<API.PaginationType>({//Cập nhật giá trị cho pagination
    limit: 12,
    page: 1,
    totalItem: 100,
    totalPage: 9,
    //Gán các giá trị ban đầu cho pagination
  });

  useEffect(() => {//useEffect chỉ được gọi lại khi pagination thay đổi
    setLoading(true);//Trước khi gọi API để lấy danh sách bài viết, 
    //setLoading được gọi để đặt trạng thái loading thành true, để hiển thị trạng thái loading trong quá trình lấy dữ liệu
    getPosts({//lấy danh sách bài viết. Tham số truyền vào là một đối tượng có hai thuộc tính _limit và _start, 
      //dùng để xác định số lượng bài viết cần lấy và vị trí bắt đầu
      _limit: pagination?.limit,
      _start: pagination?.limit * (pagination?.page - 1),
    })
      .then(({ data }) => {
        setPosts(data);//hàm setPosts được gọi để cập nhật giá trị của posts với dữ liệu bài viết được trả về (data)
      })
      .finally(() => {//gọi API thành công hay không, setLoading được gọi với giá trị false 
        //để đặt trạng thái loading thành false, để ẩn trạng thái loading sau khi hoàn thành
        setLoading(false);
      });
  }, [pagination]);

  return (
    <div className="w-full">
      {!loading && (
        <div className="grid gap-2 grid-cols-2">
          {posts?.map((post, i) => {
            return <PostItem post={post} key={i} />;
          })}
        </div>
      )}
      {loading && (
        <div className="w-full flex justify-center items-center bg-gray-800 min-h-[500px]">
          <Loading />
        </div>
      )}
      <div className="w-full mt-4 flex justify-end">
        <Pagination data={pagination} setData={setPagination} />
      </div>
    </div>
  );
};

export default Post;
