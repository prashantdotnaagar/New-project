import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home.js";
import About from "./pages/about.js";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="home" element={<HomePage />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
