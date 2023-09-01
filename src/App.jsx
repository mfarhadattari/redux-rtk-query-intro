import AddPost from "./components/AddPost";
import PostDetails from "./components/PostDetails";
import Posts from "./components/Posts";

const App = () => {
  return (
    <div className="space-y-10 my-10">
      <h1 className="text-3xl text-center">Redux RTK Query Intro</h1>
      <Posts />
      <AddPost />
      <PostDetails />
    </div>
  );
};

export default App;
