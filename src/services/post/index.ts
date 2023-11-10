import { AxiosResponse } from "axios";
import { request } from "../base";

export function getPosts(params?: API.GetReq): Promise<AxiosResponse<API.Post[]>> {
  return request().get("posts", {
    params,
  });
//Hàm nhận một đối số tùy chọn params có kiểu API.GetReq, đại diện cho các tham số tùy chọn trong yêu cầu GET.
//Hàm trả về một Promise chứa AxiosResponse,dữ liệu là một mảng các đối tượng API.Post
}
export function getPost(id: number): Promise<AxiosResponse<API.Post>> {
  return request().get("posts/" + id);
//Hàm nhận một đối số id có kiểu số nguyên, đại diện cho ID của bài viết.
// Hàm trả về một Promise chứa AxiosResponse,dữ liệu là một đối tượng Post (API.Post) tương ứng với id đã cho.
}

export function addPost(payload: API.CreatePostReq): Promise<AxiosResponse<API.Post>> {
  return request().post("posts", payload);
//Hàm nhận một đối số payload có kiểu API.CreatePostReq, đại diện cho dữ liệu của bài viết mới được tạo.
//trả về một Promise chứa AxiosResponse,dữ liệu là một đối tượng Post (API.Post) đã được tạo.
}

export function deletePost(id: number): Promise<AxiosResponse<API.Post>> {
  return request().delete("posts/" + id);
//Hàm này nhận một đối số id có kiểu số nguyên, đại diện cho ID của bài viết để xóa.
//trả về một Promise chứa AxiosResponse,dữ liệu là một đối tượng Post (API.Post) đã bị xóa.
}

export function updatePost(id: string, body: API.CreatePostReq): Promise<AxiosResponse<API.Post>> {
  return request().patch("posts/" + id, body);
//Hàm này nhận hai đối số: id có kiểu chuỗi và body có kiểu API.CreatePostReq. id 
//đại diện cho ID của bài viết cần cập nhật và body đại diện cho dữ liệu mới của bài viết,
//trả về một Promise chứa AxiosResponse,dữ liệu là một đối tượng Post (API.Post) đã được cập nhật.
}



