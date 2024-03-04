import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import GameListPage from "./pages/GameListPage";
import GameDetailsPage from "./pages/GameDetailsPage";
import EditGamePage from "./pages/EditGamePage";
import ProfilePage from "./pages/ProfilePage"
import EditProfilePage from "./pages/EditProfilePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";
import EditPasswordPage from "./pages/EditPasswordPage";

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
          path="/profile"
          element={
            <IsPrivate>
              {" "}
              <ProfilePage />{" "}
            </IsPrivate>
          }
        />

        <Route
          path="/profile/edit"
          element={
            <IsPrivate>
              {" "}
              <EditProfilePage />{" "}
            </IsPrivate>
          }
        />

        <Route
          path="/profile/editPassword"
          element={
            <IsPrivate>
              {" "}
              <EditPasswordPage />{" "}
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
