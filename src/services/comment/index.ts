import { AxiosResponse } from "axios";
import { request } from "../base";
//Không hiểu API.GetReq
export function getComments(postId: number, params?: API.GetReq): Promise<AxiosResponse<API.Comment[]>> {
  return request().get(`posts/${postId}/comments`, {
    params,
  });
}
//(postId: number, params?: API.GetReq): Đây là các tham số của hàm. 
//postId là một số nguyên biểu thị ID của bài viết, và params là một biến có kiểu API.GetReq.
//Promise<AxiosResponse<API.Comment[]>>: Hàm trả về một Promise, và giá trị được resolve là 
//một đối tượng AxiosResponse chứa dữ liệu comment được trả về từ API. Kiểu dữ liệu của comment là API.Comment[].

// request().get: Đây là một phương thức của thư viện Axios để thực hiện yêu cầu HTTP GET. request() được gọi để 
//tạo một instance của Axios và sau đó gọi phương thức get() trên instance đó.
//posts/${postId}/comments: Đây là URL của API để lấy các comment liên quan đến bài viết có postId tương ứng.
//params là một đối tượng chứa các giá trị cho yêu cầu GET, 

//Vậy hàm getComments gửi một yêu cầu GET đến một API với URL được xây dựng từ postId và các tham số tùy chọn. 
//Nó trả về một Promise chứa dữ liệu comment được nhận từ API