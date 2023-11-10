// import { useEffect, useState } from "react";
// import { useLoaderData, useParams } from "react-router-dom";
// import { getPhotos,addPhoto } from "../../services/photo";
// import AlbumItem from "../../components/album/AlbumItem";
// import PhotoItem from "../../components/photo/PhotoItem";
// // Không hiểu  <PostItem post={post as API.Post} /> 
// const AlbumDetail = () => {
//   const album = useLoaderData();
//   const { id: albumId } = useParams();
//   const [photos, setPhotos] = useState<API.Photo[] | undefined>();
//   useEffect(() => {//useEffect chỉ được gọi một lần
//     getPhotos(Number(albumId)).then(({ data }) => {
//         setPhotos(data);
//     });
//   }, [albumId]);
//   return (
//     <div className="w-full grid grid-cols-1 gap-10">
//       <div className="grid gap-2">
//         <div>
//           <h2>Album:</h2>
//         </div>
//         <AlbumItem album={album as API.Album} /> 
//       </div>
//       <div className="grid gap-2">
//         <div>
//           <h2>Content:</h2>
//         </div>
//         {photos?.map((pt, i) => {
//           return <PhotoItem photo={pt} key={i} />;
//         })}
//       </div>
//     </div>
//   );
// };

// export default AlbumDetail;
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { getPhotos, addPhoto } from "../../services/photo";
import AlbumItem from "../../components/album/AlbumItem";
import PhotoItem from "../../components/photo/PhotoItem";
import PhotoForm from "../../components/photo/PhotoFormAdd";

const AlbumDetail = () => {
  const album = useLoaderData();
  const { id: albumId } = useParams();
  const [photos, setPhotos] = useState<API.Photo[] | undefined>();
  const [showForm, setShowForm] = useState(false); // Trạng thái hiển thị form

  const fetchData=() => {
    getPhotos(Number(albumId)).then(({ data }) => {
      setPhotos(data);
    });
  }
  useEffect(() => {
    fetchData()
  });

  const handleAddPhoto = (data: API.CreatePhotoReq) => {
    addPhoto(data).then(() => {
      // Sau khi thêm ảnh thành công, cập nhật danh sách ảnh
      getPhotos(Number(albumId)).then(({ data }) => {
        setPhotos(data);
      });
      // Ẩn form
      setShowForm(false);
    });
  };

  return (
    <div className="w-full grid grid-cols-1 gap-10">
      <div className="grid gap-2">
        <div>
          <h2>Album:</h2>
        </div>
        <AlbumItem album={album as API.Album} />
      </div>
      <div className="grid gap-2">
        <div style={{display:'flex'}}>
          <h2>Content:</h2>
          {showForm ? (
            <PhotoForm albumId={Number(albumId)} onAddPhoto={handleAddPhoto} onCancel={() => setShowForm(false)} />
          ) : (
            <button style={{marginLeft:'50px',backgroundColor:'#6596f7',color:'black' ,border:'1px solid black'}} onClick={() => setShowForm(true)}>Thêm mới</button>
          )}
        </div>
        {photos?.map((pt, i) => {
          return <PhotoItem photo={pt} key={i} reload={fetchData} />;
        })}

      </div>
    </div>
  );
};

export default AlbumDetail;
