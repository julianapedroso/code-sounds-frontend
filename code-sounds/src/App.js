import React from "react";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import CreateMusicPage from "./pages/CreateMusicPage";
import ShowMusicsPage from "./pages/ShowMusicsPage";

const App = () => {
  return (
    <div>
      <LoginPage />
      <SignUpPage />
      <CreateMusicPage />
      <ShowMusicsPage />
    </div>
  );
}

export default App;
