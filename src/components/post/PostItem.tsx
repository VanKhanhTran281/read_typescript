
import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/const/routes";
import { updatePost, deletePost, addPost } from "../../services/post";

type PostItemProps = { post: API.Post, reload?: () => void };

const PostItem: FC<PostItemProps> = ({ post, reload }) => {
  const navigate = useNavigate();
  
  

  const handleClickPost = (id: number) => {
    navigate(ROUTES.post + "/" + id);
  };
  // Thêm mới post
  const [isAdding, setIsAdding] = useState(false);
  const [newPost, setNewPost] = useState<API.CreatePostReq>({
    // Khởi tạo dữ liệu bài viết mới
    title: "",
    body: ""
  });
  const handleAddClick = () => {
    setIsAdding(true);
  };

  const handleNewSaveClick = async () => {
    try {
      const response = await addPost(newPost);
      const createdPost = response.data;
      console.log("Thêm mới bài viết thành công:", createdPost);
      setIsAdding(false);
      reload?.();
    } catch (error) {
      console.error("Lỗi khi thêm mới bài viết:", error);
    }
  };

  const handleCancelClick = () => {
    setIsAdding(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewPost((prevPost) => ({
      ...prevPost,
      [name]: value
    }));
  };
  // Sửa post
  const [isEditing, setIsEditing] = useState(false);
  const [editedBody, setEditedBody] = useState(post.body);
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    if (post.id) {
      const updatedPost = { ...post, body: editedBody };
      try {
        await updatePost(post.id.toString(), updatedPost);
        setIsEditing(false);
      } catch (error) {
        console.error("Lỗi khi cập nhật bài viết:", error);
      }
    }
  };

  // Xóa post
  const handleDeleteClick = async () => {
    if (post.id) {
      try {
        await deletePost(post.id);
        reload?.()
        console.log('Thành công')
      } catch (error) {
        console.error("Lỗi khi xóa bài viết:", error);
      }
    }
  };

  return (
    <div>
      <div>
        {isAdding ? (
          <div>
            <input
              type="text"
              name="title"
              placeholder="Tiêu đề"
              value={newPost.title}
              onChange={handleInputChange}
            />
            <input
              name="body"
              placeholder="Nội dung"
              value={newPost.body}
              onChange={handleInputChange}
            />
            <button onClick={handleNewSaveClick}>Lưu</button>
            <button style={{paddingLeft:'10px'}} onClick={handleCancelClick}>Hủy</button>
          </div>
        ) : (
          <button onClick={handleAddClick}>Thêm mới bài viết</button>
        )}
      </div>
      <div style={{ display: "flex" ,paddingBottom:'20px' }}>

        <div className="border p-2">
          {!isEditing ? (
            <div>
              <h4
                className="text-[18px] font-bold cursor-pointer"
                onClick={() => handleClickPost(post.id || 0)}
              >
                {post.title}
              </h4>
              <p className="text-gray-700">{editedBody}</p>
            </div>
          ) : (
            <div className="grid gap-2 grid-cols-2">
              <div>
                <input
                  style={{ width: "545px", height: "76px" }}
                  className="border p-2"
                  type="text"
                  value={editedBody}
                  onChange={(e) => setEditedBody(e.target.value)}
                />
              </div>
              <button
                style={{ border: "1px solid black", width: "30px", marginLeft: "262px" }}
                onClick={handleSaveClick}
              >
                Lưu
              </button>
            </div>
          )}
        </div>
        {!isEditing ? (
          <>
            <button style={{ border: "1px solid black" }} onClick={handleEditClick}>
              Sửa
            </button>
            <button style={{ border: "1px solid black" }} onClick={handleDeleteClick}>
              Xóa
            </button>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default PostItem;
