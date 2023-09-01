import { useGetPostsQuery } from "../redux/features/postAPI";
import Loader from "./Loader";
import PostCard from "./PostCard";

const Posts = () => {
  const { isLoading, isError, error, data: posts = [] } = useGetPostsQuery();
  return (
    <div>
      <h1 className="text-3xl text-center">Total Posts- {posts?.length}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-4 gap-5 p-5">
          {/* {posts?.map((post) => (
          <PostCard key={post.id} post={post} />
        ))} */}
          <PostCard post={posts[0]} />
          <PostCard post={posts[1]} />
          <PostCard post={posts[2]} />
          <PostCard post={posts[3]} />
        </div>
      )}
    </div>
  );
};

export default Posts;
