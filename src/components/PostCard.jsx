const PostCard = ({ post }) => {
  return (
    <div className="bg-gray-100 rounded-md p-5">
      <h1 className="text-lg font-semibold mb-3 ">{post?.title}</h1>
      <p className="mb-3">{post?.body}</p>
      <p className="text-sm">User Id - {post?.userId}</p>
    </div>
  );
};

export default PostCard;
