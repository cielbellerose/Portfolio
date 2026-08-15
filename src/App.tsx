import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from "./components/Header";

function App() {
  return (
    <div className="mx-auto box-border flex min-h-30 w-full max-w-[1000px] min-w-[540px] flex-1 flex-col px-6">
      <NavBar />
      <main className="flex flex-1 flex-col">
        <Header />
        <Outlet />
      </main>
    </div>
  );
}

export default App;
