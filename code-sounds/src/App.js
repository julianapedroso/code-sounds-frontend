import React from "react";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import CreateMusicPage from "./pages/CreateMusicPage";
import ShowMusicsPage from "./pages/ShowMusicsPage";

const App = () => {
  return (
    <div>
      <Header />
      <LoginPage />
      <SignUpPage />
      <CreateMusicPage />
      <ShowMusicsPage />
    </div>
  );
}

export default App;
