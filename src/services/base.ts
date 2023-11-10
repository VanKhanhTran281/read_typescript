import axios, { AxiosInstance } from "axios";

export const request = (): AxiosInstance => {
  const instance = axios.create({//tạo một instance của Axios
    baseURL: process.env?.REACT_APP_BASE_API || "http://localhost:3000",
    //baseURL được xác định bằng cách sử dụng toán tử || để lấy giá trị của biến môi trường 
    //REACT_APP_BASE_API hoặc URL mặc định là "https://jsonplaceholder.typicode.com"
    //Chưa hiểu rõ
  });

  return instance;//Trả về instance của Axios đã được cấu hình với baseURL tương ứng. 
  //Instance này có thể được sử dụng để gửi các yêu cầu HTTP
};

