import React, { FC, useState } from "react";
import { deletePhoto, updatePhoto } from "../../services/photo";

type PhotoItemProps = { photo: API.Photo, reload?: () => void };

const PhotoItem: FC<PhotoItemProps> = ({ photo, reload }) => {
  const [isLargeImageVisible, setIsLargeImageVisible] = useState(false);

  const handleSmallImageClick = () => {
    setIsLargeImageVisible(true);
  };

  const handleLargeImageClick = () => {
    setIsLargeImageVisible(false);
  };
  // Sửa ảnh 
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(photo?.title);
  const [url, setUrl] = useState(photo?.url);
  const [thumbnailrl, setThumbnailUrl] = useState(photo?.thumbnailUrl);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      if (photo.id) {
        const updatedPhoto: API.CreatePhotoReq = {
          albumId: photo.albumId,
          title: title,
          url: url,
          thumbnailUrl: thumbnailrl
        };
        await updatePhoto(photo.id, updatedPhoto);
        setIsEditing(false);
        console.log('Lưu thành công');
        reload?.();
      }
    } catch (error) {
      console.error("Lỗi khi lưu thông tin ảnh:", error);
    }
  };

  // Xóa Photo
  const handleDeleteClick = async () => {
    if (photo.id) {
      try {
        await deletePhoto(photo.id);
        reload?.()
        console.log('Thành công')
      } catch (error) {
        console.error("Lỗi khi xóa thông tin ảnh:", error);
      }
    }
  };

  return (
    <div className="border p-2 cursor-pointer">
      <div style={{ display: 'flex' }}>
        <h4 className="text-[18px] font-bold">{photo?.title}</h4>
        {isEditing ? (
          <>
            <div style={{ display: 'grid', marginLeft: '200px' }}>
              <div>
                <label htmlFor="title">Tiêu đề:</label>
                <input
                  style={{marginLeft:'5px' ,width:'330px'}}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="url">URL:</label>
                <input
                  style={{marginLeft:'5px',width:'330px'}}
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="thumbnailUrl">Thumbnail Url:</label>
                <input
                  style={{marginLeft:'5px',width:'330px'}}
                  value={thumbnailrl}
                  onChange={(e) => setThumbnailUrl(e.target.value)}
                />
              </div>
            </div>
            <button
              style={{ backgroundColor: '#6596f7', color: 'black', border: '1px solid black', marginLeft: 'auto' }}
              onClick={handleSaveClick}
            >
              Lưu
            </button>
          </>
        ) : (
          <>
            <button
              style={{ backgroundColor: '#6596f7', color: 'black', border: '1px solid black', marginLeft: 'auto' }}
              onClick={handleEditClick}
            >
              Sửa ảnh
            </button>
            <button
              onClick={handleDeleteClick}
              style={{ backgroundColor: '#6596f7', color: 'black', border: '1px solid black', marginLeft: 'auto' }}
            >
              Xóa
            </button>
          </>
        )}
      </div>
      {!isLargeImageVisible ? (
        <img
          className="text-gray-700"
          src={photo?.thumbnailUrl}
          alt=""
          onClick={handleSmallImageClick}
        />
      ) : (
        <img
          className="text-gray-700"
          src={photo?.url}
          alt=""
          onClick={handleLargeImageClick}
        />
      )}

    </div>
  );
};

export default PhotoItem;