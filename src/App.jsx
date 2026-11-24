import { useState } from "react";
import Home from "./pages/Home";
import SalonRegistration from "./pages/SalonRegistration";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  function navigateTo(nextPage) {
    setPage(nextPage);
    window.scrollTo(0, 0);
  }

  return (
    <>
      {page === "home" && (
        <Home onRegister={() => navigateTo("register")} />
      )}

      {page === "register" && (
        <>
          <button onClick={() => navigateTo("home")}>
            ← Back to Home
          </button>

          <SalonRegistration />
        </>
      )}
    </>
  );
}

export default App;