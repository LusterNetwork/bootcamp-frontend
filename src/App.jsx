import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Home,
  Register,
  AboutUS,
  Contact,
  DCMA,
  Privacy,
  Terms,
  Ethereum,
} from "./pages";
import { Navbar, Footer } from "./components/layout components";
import Refund from "./pages/Refund";
import NewBootCamp from "./pages/bootcamps/NewBootcamp";
import ExcelDownload from "./pages/ExcelDownload";
import NewBootCampRegister from "./pages/NewBootCampRegister";
import Paytm from "./pages/Paytm";
import Quiz from "./pages/Quiz/Quiz";

const App = () => {
  return (
    <div className="font-manrope bg-gradient-to-br from-indigo-900 via-gray-900 to-slate-900 text-white overflow-x-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/download/excel" element={<ExcelDownload />} />
          <Route path="/" element={<Home />} />
          <Route path="/tokentrivia" element={<Quiz />} />
          <Route path="/register" element={<Register />} />
          <Route path="/newbootcampregister" element={<NewBootCampRegister />} />
          <Route path="/aboutus" element={<AboutUS />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/dcma" element={<DCMA />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund" element={<Refund />} />
            <Route path="paytm" element={<Paytm />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="bootcamps">
            <Route path="ethereum" element={<Ethereum />} />
            <Route path="newbootcamp" element={<NewBootCamp />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
