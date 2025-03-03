import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home.js";
import About from "./pages/about.js";
import Services from "./pages/services.js";
import ContactUs from "./pages/contactus.js";
import News from "./pages/news.js";
import Page from "./pages/page.js";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="home" element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="news" element={<News />} />
          <Route path="pages" element={<Page />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
