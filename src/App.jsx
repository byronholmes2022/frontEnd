import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import bookLogo from "./assets/books.png";
import Books from "./components/Books";
import Account from "./components/Account";
import Login from "./components/Login";
import Register from "./components/Register";
import Navigations from "./components/Navigations";
import SingleBook from "./components/SingleBook";
import "./styles/main.scss";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      setToken(localToken);
    }
  }, []);
  return (
    <>
      <h1>
        <img id="logo-image" src={bookLogo} />
        Library App
      </h1>
      {process.env.REACT_APP_API_BASE_URL}
      <Navigations token={token} setToken={setToken} />
      <Navigations token={token} setToken={setToken} />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/me" element={<Account />} />
        <Route
          path="/login"
          element={<Login token={token} setToken={setToken} />}
        />
        <Route
          path="/Register"
          element={<Register token={token} setToken={setToken} />}
        />
        <Route path="/books/:bookid" element={<SingleBook token={token} />} />
        <Route path="/books/:bookid" element={<SingleBook />} />
        <Route path="*" element={<Books />} />
      </Routes>
    </>
  );
}

export default App;
