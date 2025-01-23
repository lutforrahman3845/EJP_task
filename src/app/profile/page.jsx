import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
const profile = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    redirect("/api/auth/login");
  }
  return (
    <div>
      <h1 className="text-2xl text-center font-bold mt-10">
        Welcome to your profile!
      </h1>
    </div>
  );
};

export default profile;
