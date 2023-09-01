import PostCard from "./components/PostCard";
import { useGetPostQuery } from "./redux/features/postAPI";

const App = () => {
  const { isLoading, isError, error, data: posts = [] } = useGetPostQuery();

  return (
    <div>
      Redux RTK Query Intro
      <h1>{posts?.length}</h1>
      <div className="grid grid-cols-4 gap-5 p-5">
        {/* {posts?.map((post) => (
          <PostCard key={post.id} post={post} />
        ))} */}

        <PostCard post={posts[0]} />
      </div>
    </div>
  );
};

export default App;
