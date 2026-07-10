import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <div className="container">
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
