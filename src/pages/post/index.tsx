import { useEffect, useState } from "react";
import Pagination from "../../components/pagination";
import { getPosts } from "../../services/post";
import PostItem from "../../components/post/PostItem";
import Loading from "../../components/loading";

const Post = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<API.Post[] | undefined>();
  const [pagination, setPagination] = useState<API.PaginationType>({
    limit: 12,
    page: 1,
    totalItem: 100,
    totalPage: 9,
  });

  useEffect(() => {
    setLoading(true);
    getPosts({
      _limit: pagination?.limit,
      _start: pagination?.limit * (pagination?.page - 1),
    })
      .then(({ data }) => {
        setPosts(data);
      })
      .finally(() => {
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
