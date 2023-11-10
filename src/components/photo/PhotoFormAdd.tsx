import React, { useState } from "react";

interface PhotoFormProps {
  albumId: number;
  onAddPhoto: (data: API.CreatePhotoReq) => void;
  onCancel: () => void;
}

const PhotoForm: React.FC<PhotoFormProps> = ({albumId, onAddPhoto, onCancel }) => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload: API.CreatePhotoReq = {
      albumId,
      title,
      url: imageUrl,
      thumbnailUrl,
    };
    onAddPhoto(payload);
    setTitle("");
    setImageUrl("");
    setThumbnailUrl("");
  };

  return (
    <form style={{marginLeft:'50px'}} onSubmit={handleSubmit}>
      <h3 >Thêm mới ảnh</h3>

      <div>
        <label htmlFor="title">Tiêu đề:</label>
        <input
          style={{marginLeft:'5px'}}
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="imageUrl">URL:</label>
        <input
          style={{marginLeft:'5px'}}
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="thumbnailUrl">Thumbnail Url:</label>
        <input
          style={{marginLeft:'5px'}}
          type="text"
          id="thumbnailUrl"
          value={thumbnailUrl}
          onChange={(e) => setThumbnailUrl(e.target.value)}
        />
      </div>
      <div style={{marginTop:'20px'}}>
        <button style={{backgroundColor:'#6596f7',color:'black' ,border:'1px solid black'}} type="submit">Thêm</button>
        <button style={{marginLeft:'10px',backgroundColor:'#6596f7',color:'black' ,border:'1px solid black'}} type="button" onClick={onCancel}>
          Hủy
        </button>
      </div>
    </form>
  );
};

export default PhotoForm;