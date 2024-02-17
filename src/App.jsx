import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import GameListPage from "./pages/GameListPage";
import GameDetailsPage from "./pages/GameDetailsPage";
import EditGamePage from "./pages/EditGamePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route
          path="/games"
          element={
            <IsPrivate>
              {" "}
              <GameListPage />{" "}
            </IsPrivate>
          }
        />

        <Route
          path="/games/:gameId"
          element={
            <IsPrivate>
              {" "}
              <GameDetailsPage />{" "}
            </IsPrivate>
          }
        />

        <Route
          path="/games/edit/:gameId"
          element={
            <IsPrivate>
              {" "}
              <EditGamePage />{" "}
            </IsPrivate>
          }
        />

        <Route
          path="/signup"
          element={
            <IsAnon>
              {" "}
              <SignupPage />{" "}
            </IsAnon>
          }
        />

        <Route
          path="/login"
          element={
            <IsAnon>
              {" "}
              <LoginPage />{" "}
            </IsAnon>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
