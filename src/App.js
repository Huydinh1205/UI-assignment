import { Route, Routes } from "react-router";
import "./App.css";
import SearchAppBar from "./components/SearchAppBar";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";
import { useState } from "react";

function App() {
  const [login, setLogin] = useState(false);
  const handleLogin = () => {
    setLogin((prev) => !prev);
  };
  return (
    <div>
      <SearchAppBar login={login} handleLogin={handleLogin} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<DetailPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route
          path="/login"
          element={<LoginPage handleLogin={handleLogin} />}
        />
      </Routes>
    </div>
  );
}

export default App;
