declare namespace API {
    type Photo = {
      albumId: number;
      id: number;
      title: string;
      url:string;
      thumbnailUrl:string;
    }
    type CreatePhotoReq = {
      albumId: number;
      title: string;
      url:string;
      thumbnailUrl:string;
    };
  }