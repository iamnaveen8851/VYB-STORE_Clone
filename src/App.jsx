import "./App.css";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  return (
    <>
      {/* Hello */}
      <Navbar />
      {/* <Homepage /> */}
      {/* <Login /> */}
      <Signup />
      <Footer />
    </>
  );
}

export default App;
