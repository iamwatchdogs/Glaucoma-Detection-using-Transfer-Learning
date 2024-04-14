import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
