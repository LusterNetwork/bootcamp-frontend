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

const App = () => {
  return (
    <div className="font-manrope bg-gradient-to-br from-indigo-900 via-gray-900 to-slate-900 text-white overflow-x-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/aboutus" element={<AboutUS />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/dcma" element={<DCMA />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="bootcamps">
            <Route path="ethereum" element={<Ethereum />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
