import axios from "axios";
import Link from "next/link";

export default async function Home() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return (
    <div className="container mx-auto">
      <div className="text-2xl text-center font-bold mt-10"> Blogs</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10 mx-2">
        {res.data.map((item, index) => (
          <div
            key={index}
            className="bg-gray-200 px-4 pt-4 pb-2 rounded-lg flex flex-col justify-between"
          >
            <div className="text-lg font-bold">{item.title}</div>
            <div className="flex justify-end">
              <Link href={`/blog/${item.id}`}>
                <p className="text-indigo-700 font-semibold underline mt-5">
                  {" "}
                  Visit the blog
                </p>{" "}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
