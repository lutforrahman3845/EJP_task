import axios from "axios";

const Details = async ({ params }) => {
  const { id } = await params;
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  return (
    <div>
      <h1 className="text-2xl text-center font-semibold">Blog Details</h1>
      <div className="bg-gray-200 p-4 rounded-lg max-w-2xl mx-auto mt-10">
        <h4 className="text-lg mb-3">
          <strong>Title :</strong> {res?.data?.title}
        </h4>
        <h4>{res?.data?.body}</h4>
      </div>
    </div>
  );
};

export default Details;
