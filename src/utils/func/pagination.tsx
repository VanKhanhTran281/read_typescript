export function generatePagination(data: API.PaginationType) {
  var current = data?.page,
    last = data?.totalPage,//Tổng số trang
    delta = 2,//số lượng trang sẽ hiển thị bên trái và bên phải trang hiện tại
    left = current - delta,//giới hạn bên trái của các trang sẽ được hiển thị
    right = current + delta + 1,//giới hạn bên phải của các trang sẽ được hiển thị
    range = [],//Một mảng rỗng range được khởi tạo để lưu trữ danh sách các số trang
    rangeWithDots = [],//Một mảng rỗng rangeWithDots được khởi tạo để lưu trữ danh sách các số trang cùng với dấu ba chấm
    l;//Biến l được khởi tạo để theo dõi số trang trước đó trong vòng lặp

  for (let i = 1; i <= last; i++) {
    if (i == 1 || i == last || (i >= left && i < right)) {//kiểm tra xem trang hiện tại có nằm trong khoảng các trang sẽ được hiển thị
      range.push(i);//Nếu điều kiện đúng, số trang đó sẽ được thêm vào mảng range
    }
  }

  for (let i of range) {//kiểm tra xem có cần thêm dấu ba chấm hay không
    if (l) {
      if (i - l === 2) {//Nếu số trang trước đó và số trang hiện tại cách nhau 2 đơn vị, số trang tiếp theo sẽ được thêm vào rangeWithDots
        rangeWithDots.push(l + 1);
      } else if (i - l !== 1) {//Nếu khoảng cách không phải 1, dấu ba chấm sẽ được thêm vào rangeWithDots
        rangeWithDots.push("...");
      }
    }
    rangeWithDots.push(i);//thêm số trang hiện tại i vào mảng rangeWithDots
    l = i;//sử dụng để gán giá trị của biến i cho biến l 
    //giúp lưu giữ số trang hiện tại để có thể so sánh với số trang kế tiếp trong vòng lặp tiếp theo
  }

  return rangeWithDots;//chứa các số trang và dấu ba chấm
}
