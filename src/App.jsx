import { useEffect, useState } from "react";
import { Nav } from "./components/nav";
import "./App.css";
import { Outlet, useLocation } from "react-router";

function App() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("items")));

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname]);

  return (
    <main>
      <Nav
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        cartItems={cart}
      />
      <Outlet context={{ setCart: setCart }} />
    </main>
  );
}

export default App;
