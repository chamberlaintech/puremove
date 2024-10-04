import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Workout from "./pages/Workout/Workout";
import SingleWorkout from "./pages/SingleWorkout/SingleWorkout";
import Recipe from "./pages/Recipe/Recipe";
import SingleRecipe from "./pages/SingleRecipe/SingleRecipe";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Error from "./pages/Error/Error";
import Footer from "./components/Footer/Footer";
import ScrollTop from "./components/ScrollTop/ScrollTop";

function App() {
  return (
    <div className="flex-wrapper">
      <Navbar />
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/workout/:id" element={<SingleWorkout />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/recipe/:id" element={<SingleRecipe />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
