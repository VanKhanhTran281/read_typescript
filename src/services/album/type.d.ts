declare namespace API {
    type Album = {
      userId?: number;
      id?: number;
      title?: string;
    };
  
    type CreateAlbumReq = {
      userId?: number;
      title?: string;
    };
  }
  