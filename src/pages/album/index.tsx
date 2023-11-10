import { useEffect, useState } from "react";
import { getAlbums } from "../../services/album";
import AlbumItem from "../../components/album/AlbumItem";
import Loading from "../../components/loading";
import Pagination from "../../components/pagination";

export default function Album() {
  const [loading, setLoading] = useState(false);
  const [albums, setAlbums] = useState<API.Album[] | undefined>();
  const [pagination, setPagination] = useState<API.PaginationType>({
    limit: 10,
    page: 1,
    totalItem: 100,
    totalPage: 10,
  });
 const  fetchData=() => {
    setLoading(true);
    getAlbums({
      _limit: pagination?.limit,
      _start: pagination?.limit * (pagination?.page - 1),
    })
      .then(({ data }) => {
        setAlbums(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {//useEffect chỉ được gọi lại khi pagination thay đổi
    fetchData()
  }, [pagination]);
    return(
        <div className="w-full">
      {!loading && (
        <div className="grid gap-2 grid-cols-2">
          {albums?.map((album, i) => {
            return <AlbumItem album={album} key={i} reload={fetchData} />;
          })}
        </div>
      )}
      {loading && (
        <div className="w-full flex justify-center items-center bg-gray-800 min-h-[500px]">
          <Loading />
        </div>
      )}
      <div className="w-full mt-4 flex justify-end">
        <Pagination data={pagination} setData={setPagination} />
      </div>
    </div>
    )
}