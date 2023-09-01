import { useForm } from "react-hook-form";
import { useAddPostMutation } from "../redux/features/postAPI";

const AddPost = () => {
  const [addPost, { isLoading, isError, data: result, reset, status }] =
    useAddPostMutation();

  // console.log(isError, isError, result, status);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    data.userId = 1;
    addPost(data);
  };

  return (
    <div>
      <h1 className="text-3xl text-center">Add Post</h1>
      <div className="bg-gray-100 rounded-md p-5 w-[400px] mx-auto mt-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-2 w-full">
            <input
              type="text"
              className="border p-2 w-full  rounded-md"
              placeholder="Title"
              defaultValue="qui est esse"
              {...register("title")}
            />
          </div>
          <div className="my-2 w-full">
            <textarea
              type="text"
              className="border p-2 w-full rounded-md"
              placeholder="Body"
              defaultValue="est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
              {...register("body")}
            ></textarea>
          </div>
          <div className="my-2 w-full">
            <input
              type="text"
              className="border p-2 w-full  rounded-md"
              placeholder="user ID"
              defaultValue={1}
              {...register("userId")}
            />
          </div>
          <button className="bg-pink-500 text-white px-3 py-2 w-full">
            Add Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
