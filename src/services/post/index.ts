import { AxiosResponse } from "axios";
import { request } from "../base";

export function getPosts(params?: API.GetReq): Promise<AxiosResponse<API.Post[]>> {
  return request().get("posts", {
    params,
  });
}
export function getPost(id: number): Promise<AxiosResponse<API.Post>> {
  return request().get("posts/" + id);
}

export function addPost(payload: API.CreatePostReq): Promise<AxiosResponse<API.Post>> {
  return request().post("posts", payload);
}

export function deletePost(id: number): Promise<AxiosResponse<API.Post>> {
  return request().delete("posts/" + id);
}

export function updatePost(id: string, body: API.CreatePostReq): Promise<AxiosResponse<API.Post>> {
  return request().patch("posts/" + id, body);
}
