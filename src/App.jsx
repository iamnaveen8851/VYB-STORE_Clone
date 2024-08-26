import "./App.css";
import AllRoutes from "./components/AllRoutes";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Verify from "./Pages/Verify";
import VerifySuccess from "./Pages/VerifySuccess";

function App() {
  return (
    <>
      {/* Hello */}
      <Navbar />
      <AllRoutes />
      {/* <Homepage /> */}
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <Verify/> */}
      {/* <VerifySuccess/> */}
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}

export default App;
