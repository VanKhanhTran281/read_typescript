declare namespace API {
  type Post = {
    userId?: number;
    id?: number;
    title?: string;
    body?: string;
  };

  type CreatePostReq = {
    userId?: number;
    title?: string;
    body?: string;
  };
}
