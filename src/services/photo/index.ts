import { AxiosResponse } from "axios";
import { request } from "../base";
export function getPhotos(albumId: number, params?: API.GetReq): Promise<AxiosResponse<API.Photo[]>> {
  return request().get(`albums/${albumId}/photos`, {
    params,
  });}
// Hàm thêm mới một bức ảnh
export function addPhoto(payload: API.CreatePhotoReq): Promise<AxiosResponse<API.Photo>> {
  return request().post("photos", payload);
}

// Hàm xóa một bức ảnh dựa trên ID
export function deletePhoto(id: number): Promise<AxiosResponse<API.Photo>> {
  return request().delete(`photos/${id}`);
}

// Hàm cập nhật thông tin của một bức ảnh
export function updatePhoto(id: number, updatedPhoto: API.CreatePhotoReq): Promise<AxiosResponse<API.Photo>> {
  return request().patch(`photos/${id}`, updatedPhoto);
}