import { useAuth } from "@falcon-z/hooks/useAuth";
import { Button } from "./ui/button";
import { Share1Icon, Share2Icon } from "@radix-ui/react-icons";

export default function Header() {
  const { username, logout } = useAuth();

  return (
    <header className="fixed top-0 w-full  border-b-2 backdrop-blur  bg-gray-950 bg-opacity-25 border-gray-950/50 py-4 px-8l">
      <div className="flex justify-around items-center px-8 py-2">
        <h1 className="text-2xl font-semibold flex items-center justify-center">
          Z0-Share
          <Share1Icon className="inline-block ml-2 mr-2 h-8 w-8" />
          (v2 - Dev)
        </h1>
        <div>
          <Button onClick={logout} variant={"ghost"}>
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
}
