import "./App.css";
import NavBar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import ContactBtn from "./components/ContactBtn";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from "./components/logincompo/login";
import CartPage from "./components/CartPage";



function App() {
  return (
    <>

      <NavBar />
      <div id="zsec"></div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>

      <Footer />
      <ContactBtn />
    </>

  );
}

export default App;
