import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header/Header";
import { Outlet, useLocation } from "react-router-dom";

export default function App() {
  const location = useLocation();
  const darkStyling = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.10)),
    linear-gradient(
      140deg,
      #eadedb 0%,
      #fb6d7a 25%,
      #bc70a4 50%,
      #eff5d0 75%,
      #0f7394
    )`;
  return (
    <>
      <header>
        <Header />
      </header>
      <main style={location.pathname === '/' ? {} : {backgroundImage: darkStyling}}>
        <Outlet />
      </main>
    </>
  );
}
