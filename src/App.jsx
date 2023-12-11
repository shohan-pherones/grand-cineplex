import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useSmooth } from "./hooks/useSmooth";
import AboutPage from "./pages/About";
import ActorDetailsPage from "./pages/ActorDetailsPage";
import ActorsPage from "./pages/Actors";
import ContactPage from "./pages/Contact";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import MoviesPage from "./pages/Movies";
import NotFoundPage from "./pages/NotFound";
import ProfilePage from "./pages/Profile";
import RegisterPage from "./pages/Register";
import ManageMoviesPage from "./pages/ManageMoviesPage";
import FavoriteListPage from "./pages/FavoriteListPage";

const App = () => {
  useSmooth();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-dark min-h-screen text-light">
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />} />
        <Route path="/actors" element={<ActorsPage />} />
        <Route path="/actors/:id" element={<ActorDetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/favorite-list" element={<FavoriteListPage />} />
        <Route path="/admin/manage-movies" element={<ManageMoviesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
