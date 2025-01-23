import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between items-center">
        <div className="text-lg font-semibold ">Logo</div>
        <div>
          <ul className="flex space-x-4 ">
            <li className="py-1 px-2 border rounded font-medium">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="py-1 px-2 border rounded font-medium">
              <Link href={"/profile"}>Profile</Link>
            </li>
            <li className="py-1 px-2 border rounded font-medium">
              <Link href={"/login"}>Log in</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
