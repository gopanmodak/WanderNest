import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  
  return (
    <div>
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
