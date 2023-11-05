import { FC } from "react";
import { generatePagination } from "../../utils/func/pagination";
type PaginationProps = {
  data: API.PaginationType;
  setData: (data: API.PaginationType) => void;
};
const Pagination: FC<PaginationProps> = ({ data, setData }) => {
  const pagination = generatePagination(data);
  const focusClass = "bg-gradient-to-r from-violet-300 to-indigo-300 text-white";

  const handlePrevious = () => {
    const page = data?.page - 1;
    setData({
      ...data,
      page: page > 0 ? page : 1,
    });
  };
  const handleNext = () => {
    const page = data?.page + 1;
    setData({
      ...data,
      page: page <= data?.totalPage ? page : data?.totalPage,
    });
  };
  const handleChangePage = (page: number) => {
    setData({
      ...data,
      page,
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
      {pagination?.map((p, i) => {
        return (
          <>
            {Number.isInteger(p) && (
              <a
                key={i}
                href="#"
                className={`relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-fuchsia-100 
                  hover:bg-fuchsia-200 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out 
                  ${Number(p) === data?.page ? focusClass : ""}`}
                onClick={() => {
                  const page = Number(p);
                  handleChangePage(page);
                }}
              >
                {p}
              </a>
            )}
            {!Number.isInteger(p) && (
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
    </nav>
  );
};
export default Pagination;
