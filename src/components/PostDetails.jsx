import { useGetPostDetailsQuery } from "../redux/features/postAPI";
import Loader from "./Loader";
import PostCard from "./PostCard";

const PostDetails = () => {
  const { isLoading, isError, data: post } = useGetPostDetailsQuery(1);
  return (
    <div className="w-[400px] mx-auto ">
      <h1 className="text-3xl text-center my-5">Post Details</h1>
      {isLoading ? <Loader /> : <PostCard post={post} />}
    </div>
  );
};

export default PostDetails;
