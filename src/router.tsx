import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Error404 from "./pages/error/Error404";
import Home from "./pages/home";
import Post from "./pages/post";
import PostDetail from "./pages/post/PostDetail";
import { getPost } from "./services/post";
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
        path: "/post/:id",
        element: <PostDetail />,
        loader: async ({ params }) => {
          const res = await getPost(Number(params?.id));
          if (res.status === 404) {
            throw new Response("Not Found", { status: 404 });
          }
          return res.data;
        },
      },
    ],
  },
]);
