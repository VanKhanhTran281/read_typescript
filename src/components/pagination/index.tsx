import { FC } from "react";
import { generatePagination } from "../../utils/func/pagination";
type PaginationProps = {
  data: API.PaginationType;// truyền một đối tượng data có cấu trúc và kiểu dữ liệu nhất định vào component

  //cho phép truyền một hàm setData vào component để cập nhật dữ liệu data bên trong component
  setData: (data: API.PaginationType) => void;
};
const Pagination: FC<PaginationProps> = ({ data, setData }) => {
  const pagination = generatePagination(data);
  const focusClass = "bg-gradient-to-r from-violet-300 to-indigo-300 text-white";

  const handlePrevious = () => {//được gọi khi người dùng muốn chuyển đến trang trước đó trong phân trang
    const page = data?.page - 1;// kiểm tra giá trị của trang hiện tại và giảm nó đi 1
    setData({//cập nhật dữ liệu data của phân trang
      ...data,
      page: page > 0 ? page : 1,
      //Nếu page lớn hơn 0 là trang hiện tại không phải là trang đầu tiên, 
      //thì giá trị của thuộc tính page trong đối tượng data sẽ được cập nhật thành giá trị page hiện tại
      //Nếu page nhỏ 0 nghĩa là trang hiện tại là trang đầu tiên hoặc có giá trị không hợp lệ, 
      //thì giá trị của thuộc tính page trong đối tượng data sẽ được cập nhật thành 1, đảm bảo rằng trang không nhỏ hơn 1
    });
  };
  const handleNext = () => {//Hàm này được gọi khi người dùng muốn chuyển đến trang kế tiếp trong phân trang
    const page = data?.page + 1;// kiểm tra giá trị của trang hiện tại và tăng nó lên 1 đơn vị
    setData({
      ...data,
      page: page <= data?.totalPage ? page : data?.totalPage,
      //Nếu page nhỏ hơn hoặc bằng data?.totalPage nghĩa là trang hiện tại không vượt quá tổng số trang, 
      //thì giá trị của thuộc tính page trong đối tượng data sẽ được cập nhật thành giá trị page hiện tại
      //Nếu page lớn hơn data?.totalPage nghĩa là trang hiện tại vượt qua tổng số trang 
      //hoặc có giá trị không hợp lệ, thì giá trị của thuộc tính page trong đối tượng data sẽ được 
      //cập nhật thành giá trị data?.totalPage
    });
  };
  const handleChangePage = (page: number) => {//Hàm này nhận vào tham số page là số trang mà người dùng muốn chuyển đến
    setData({
      ...data,
      page,//page của data được cập nhật thành giá trị page được truyền vào
    });
  };
  return (
    <nav className="flex space-x-2" aria-label="Pagination">
      <a
        href="#"
        className={`relative inline-flex items-center px-4 py-2 text-sm border border-fuchsia-100 
          hover:border-violet-100 font-semibold cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out 
          ${Number(data?.page !== 1) ? focusClass : "text-gray-500"}
          `}
        onClick={handlePrevious}
      >
        Previous
      </a>
{/* ${Number(data?.page !== 1) ? focusClass : "text-gray-500"} được sử dụng để đặt class CSS .
Điều kiện Number(data?.page !== 1) kiểm tra xem giá trị của page hiện tại có khác 1 không.
Nếu (data?.page !== 1) sai thì áp dụng text-gray-500  */}

      
      {pagination?.map((p, i) => {
        return (
          <>
            {Number.isInteger(p) && (//p là một số nguyên, thì thẻ <a> sẽ được tạo ra và hiển thị. 
            //Nếu p không phải là một số nguyên, thì không có thẻ <a> nào được tạo ra
              <a
                key={i}
                href="#"
                className={`relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-fuchsia-100 
                  hover:bg-fuchsia-200 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out 
                  ${Number(p) === data?.page ? focusClass : ""}`}
                onClick={() => {
                  const page = Number(p);//Giá trị của p sẽ được gán với biến page để cập nhật lại trang tương ứng với page 
                  handleChangePage(page);
                }}
              >
                {p}
              </a>
            )}
            {!Number.isInteger(p) && (//p không phải là một số nguyên, thì thẻ <a> sẽ được tạo ra và hiển thị. 
            //Nếu p là một số nguyên, thì không có thẻ <a> nào được tạo ra và hiển thị
              <a
                key={i}
                href="#"
                className="relative inline-flex items-center px-4 text-sm font-medium text-gray-700 bg-white cursor-default leading-5 rounded-md transition duration-150 ease-in-out "
              >
                {p}
              </a>
            )}
          </>
        );
      })}
      <a
        href="#"
        className={`relative inline-flex items-center px-4 py-2 text-sm border border-fuchsia-100 
        hover:border-violet-100 font-semibold cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out 
        ${Number(data?.page !== data?.totalPage) ? focusClass : "text-gray-500"}
        `}
        onClick={handleNext}
      >
        Next
      </a>

      {/* Number(data?.page !== data?.totalPage): Điều kiện này kiểm tra xem giá trị của trang hiện tại
      có khác giá trị của data?.totalPage (tổng số trang) hay không. Kết quả trả về là một giá trị boolean, 
      được chuyển đổi thành số (0 hoặc 1) bằng cách sử dụng hàm Number() */}
    </nav>
  );
};
export default Pagination;
