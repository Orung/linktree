// import profile_img from "./images/profile-img.jpeg";
import i4g from "./images/I4G.png";
import zuri from "./images/Zuri_Internship_Logo.png";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

// function Home() {
//   return (
//     <section>
//       <h1>Home Cmponent</h1>
//       <Link to='/contact'>vv</Link>
//     </section>
//   );
// }

function App() {
  return (
    <section>
      <div className="m-5">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>

        <hr className="py-2" />
        <footer className="flex justifybetween">
          <div className="mb-1">
            <img src={zuri} alt="logo" />
          </div>
          <div className="mb-1">HNG Internship 9 Frontend Task</div>
          <div className="mb-1">
            <img src={i4g} alt="logo" />
          </div>
        </footer>
      </div>
    </section>
  );
}

export default App;
