import { AxiosResponse } from "axios";
import { request } from "../base";
export function getAlbums(params?: API.GetReq): Promise<AxiosResponse<API.Album[]>> {
    return request().get("albums", {
        params,
    });
}
export function getAlbum(id: number): Promise<AxiosResponse<API.Album>> {
    return request().get("albums/" + id);
}

export function addAlbum(payload:API.CreateAlbumReq):Promise<AxiosResponse<API.Album>>{
    return request().post('albums',payload)
}

export function deleteAlbum(id:number):Promise<AxiosResponse<API.Album>>{
    return request().delete('albums/'+id)
}