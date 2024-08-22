import "./App.css";
import { useAuth } from "./hooks/useAuth";
import { User } from "./lib/db";
import AuthPage from "./pages/auth";
import FeedPage from "./pages/feed";

function App() {
  const { username } = useAuth();

  return <>{username && User.is ? <FeedPage /> : <AuthPage />}</>;
}

export default App;
