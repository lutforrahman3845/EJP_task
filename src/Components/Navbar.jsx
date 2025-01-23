import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
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
            {user ? (
              <>
                <li className="py-1 px-2 border rounded font-medium">
                  <LogoutLink>Log out</LogoutLink>
                </li>
              </>
            ) : (
              <>
                <li className="py-1 px-2 border rounded font-medium">
                  <LoginLink>Log in</LoginLink>
                </li>
                <li className="py-1 px-2 border rounded font-medium">
                  <RegisterLink>Register</RegisterLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};
