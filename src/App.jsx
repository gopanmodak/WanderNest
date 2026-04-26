import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>


      <section className="pt-20">
      <Outlet />

      </section>

    </div>
  );
};

export default App;
