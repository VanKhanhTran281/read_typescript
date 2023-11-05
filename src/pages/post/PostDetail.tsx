import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PostItem from "../../components/post/PostItem";
import { getComments } from "../../services/comment";
import CommentItem from "../../components/comment/CommentItem";

const PostDetail = () => {
  const post = useLoaderData();
  const { id: postId } = useParams();
  const [comments, setComments] = useState<API.Comment[] | undefined>();

  useEffect(() => {
    getComments(Number(postId)).then(({ data }) => {
      setComments(data);
    });
  }, []);
  return (
    <div className="w-full grid grid-cols-1 gap-10">
      <div className="grid gap-2">
        <div>
          <h2>Contents:</h2>
        </div>
        <PostItem post={post as API.Post} />
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
