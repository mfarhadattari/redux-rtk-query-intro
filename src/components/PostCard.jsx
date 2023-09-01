import { useDeletePostMutation } from "../redux/features/postAPI";

const PostCard = ({ post }) => {
  const [deletePost, { isLoading, isError, status, data: result, error }] =
    useDeletePostMutation();

  // console.log(isLoading, isError, error, result, error);

  return (
    <div className="bg-gray-100 rounded-md p-5">
      <h1 className="text-lg font-semibold mb-3 ">{post?.title}</h1>
      <p className="mb-3">{post?.body}</p>
      <p className="text-sm">User Id - {post?.userId}</p>
      <button
        className="bg-red-200 mt-3 px-3 py-2"
        onClick={() => deletePost(post.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default PostCard;
