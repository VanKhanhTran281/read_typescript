import React, { ChangeEvent, useState } from "react";

interface PhotoFormProps {
  albumId: number;
  onAddPhoto: (data: API.CreatePhotoReq) => void;
  onCancel: () => void;
}

type DataType = {
  title: string
url: string
thumbnailUrl: string
}

const PhotoForm: React.FC<PhotoFormProps> = ({albumId, onAddPhoto, onCancel }) => {
  const [data, setData] = useState({} as DataType)

  const handleChangeData = (e: ChangeEvent<HTMLInputElement>)=>{
    const {name, value} = e.target
    setData({...data,[name] : value}) 
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload: API.CreatePhotoReq = {
      albumId,
      ...data
    };
    onAddPhoto(payload);
    setData({} as DataType)
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
          name="'title"
          value={data?.title || ''}
          onChange={handleChangeData}
        />
      </div>

      <div>
        <label htmlFor="imageUrl">URL:</label>
        <input
          style={{marginLeft:'5px'}}
          type="text"
          name="imageUrl"
          id="imageUrl"
          value={data?.url || ''}
          onChange={handleChangeData}
        />
      </div>

      <div>
        <label htmlFor="thumbnailUrl">Thumbnail Url:</label>
        <input
          style={{marginLeft:'5px'}}
          type="text"
          id="thumbnailUrl"
          name="thumbnailUrl"
          value={data?.thumbnailUrl || ''}
          onChange={handleChangeData}
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