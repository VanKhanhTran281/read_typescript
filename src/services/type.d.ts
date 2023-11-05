declare namespace API {
  type PaginationType = {
    totalItem: number;
    totalPage: number;
    page: number;
    limit: number;
  };

  type GetReq = {
    _limit?: number;
    _start?: number;
  };
}
