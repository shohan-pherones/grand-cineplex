import { useSmooth } from "./hooks/useSmooth";
import HomePage from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  useSmooth();

  return (
    <div className="bg-dark min-h-screen text-light">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
};

export default App;
