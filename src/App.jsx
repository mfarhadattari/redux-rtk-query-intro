import AddPost from "./components/AddPost";
import Loader from "./components/Loader";
import PostCard from "./components/PostCard";
import { useGetPostQuery } from "./redux/features/postAPI";

const App = () => {
  const { isLoading, isError, error, data: posts = [] } = useGetPostQuery();

  return (
    <div>
      Redux RTK Query Intro
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
      <h1 className="text-3xl text-center">Add Post</h1>
      <AddPost />
    </div>
  );
};

export default App;
