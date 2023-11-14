import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Error404 from "./pages/error/Error404";
import Home from "./pages/home";
import Post from "./pages/post";
import PostDetail from "./pages/post/PostDetail";
import Album from "./pages/album";
import { getPost } from "./services/post";
import AlbumDetail from "./pages/album/AlbumDetail";
import { getAlbum } from "./services/album";
import TestRedux from "./pages/test_redux/TestRedux";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/post",
        element: <Post />,
      },
      {
        path: "/album",
        element: <Album />,
      },
      {
        path: "/redux",
        element: <TestRedux />,
      },
      {
        path: "/post/:id",
        element: <PostDetail />,
        //Xử lý trường hợp không tìm thấy bài viết
        //Chưa hiểu lắm
        loader: async ({ params }) => {
          const res = await getPost(Number(params?.id));
          if (res.status === 404) {
            throw new Response("Not Found", { status: 404 });
          }
          return res.data;//trả về dữ liệu bài viết được lấy từ cuộc gọi API (res.data)
        },
      },
      {
        path: "/album/:id",
        element: <AlbumDetail />,
        loader: async ({ params }) => {
          const res = await getAlbum(Number(params?.id));
          if (res.status === 404) {
            throw new Response("Not Found", { status: 404 });
          }
          return res.data;
        },
      },
    ],
  },
]);
