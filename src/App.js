import "./App.css";
import Nav from "./layout/Nav";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Director } from "./pages/about/Director";
import { Teacher } from "./pages/about/Teacher";
import { Student } from "./pages/about/Student";
import { Law } from "./pages/document/Law";
import Plan from './pages/document/Plan';
import { Calendar } from "./pages/document/Calendar";
import { Research } from "./pages/document/Research";
import { Gallery } from "./pages/gallery/Gallery";
import { Contact } from "./pages/contact/Contact";
import PostPage from './pages/home/PostPage';
import { Philosophys } from "./pages/about/Philosophys";
import { Structure } from "./pages/about/Structure";
import { Footer } from "./layout/Footer";

function App() {
  return (
    <>
      <Nav />
      
      <div className="full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/school/philosophy" element={<Philosophys />} />
            <Route path="/school/structure" element={<Structure />} />
            <Route path="/director" element={<Director />} />
            <Route path="/teacher" element={<Teacher />} />
            <Route path="/student" element={<Student />} />
            <Route path="/law" element={<Law />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/research" element={<Research />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/post/:id" element={<PostPage />} />

          </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
