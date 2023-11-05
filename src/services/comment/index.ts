import { AxiosResponse } from "axios";
import { request } from "../base";

export function getComments(postId: number, params?: API.GetReq): Promise<AxiosResponse<API.Comment[]>> {
  return request().get(`posts/${postId}/comments`, {
    params,
  });
}