import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {
  
  return (
    <div>
      <ScrollToTop />

      <nav>
        <Navbar />
      </nav>


      <section className="pt-20">
      <Outlet />

      </section>


      <footer>
        <Footer />
      </footer>

    </div>
  );
};

export default App;
