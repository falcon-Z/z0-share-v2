import "./App.css";
import BackgroundGradient from "./components/backgroundGradient";
import { useAuth } from "./hooks/useAuth";
import { User } from "./lib/db";
import AuthPage from "./pages/auth";
import FeedPage from "./pages/feed";

function App() {
  const { username } = useAuth();

  return (
    <main className="relative h-screen w-full flex flex-col items-center justify-center">
      <div className="absolute -z-30 inset-0">
        <BackgroundGradient />
      </div>

      {username && User.is ? <FeedPage /> : <AuthPage />}
    </main>
  );
}

export default App;
