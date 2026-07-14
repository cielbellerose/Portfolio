import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <div className="container">
      <NavBar />
      <main>
        <Header />
        <Outlet />
      </main>
    </div>
  );
}

export default App;
