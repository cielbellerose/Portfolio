import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import Resume from "./pages/Resume.tsx";
import More from "./pages/More.tsx";
import Contact from "./pages/Contact.tsx";
import { Analytics } from "@vercel/analytics/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="resume" element={<Resume />} />
          <Route path="more" element={<More />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Analytics />
  </StrictMode>,
);
