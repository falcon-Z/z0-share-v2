import { useAuth } from "@falcon-z/hooks/useAuth";
import { Button } from "./ui/button";
import { User } from "@falcon-z/lib/db";

export default function Header() {
  const { username, logout } = useAuth();

  return (
    <header>
      <h1>Z0 Share</h1>
      {User.is && <p>Logged in as {username}</p>}
      <Button variant={"ghost"} onClick={logout}>
        Logout
      </Button>
    </header>
  );
}
