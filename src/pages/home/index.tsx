import { useEffect, useState } from "react";
import { getPosts } from "../../services/post";
import PostItem from "../../components/post/PostItem";

export default function Home() {
  const [popularPosts, setPopularPosts] = useState<API.Post[] | undefined>();

  useEffect(() => {
    getPosts({
      _start: 0,
      _limit: 10,
    }).then((res) => {
      setPopularPosts(res.data);
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
