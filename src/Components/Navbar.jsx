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
        <ul className="flex space-x-4 ">
          <Link href={"/"} className="py-1 px-2 border rounded font-medium">
            Home
          </Link>

          <Link
            href={"/profile"}
            className="py-1 px-2 border rounded font-medium"
          >
            Profile
          </Link>

          {user ? (
            <>
              <LogoutLink className="py-1 px-2 border rounded font-medium">
                Log out
              </LogoutLink>
            </>
          ) : (
            <>
              <LoginLink className="py-1 px-2 border rounded font-medium">
                Log in
              </LoginLink>

              <RegisterLink className="py-1 px-2 border rounded font-medium">
                Register
              </RegisterLink>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};
