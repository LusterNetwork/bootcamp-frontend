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
  AiBootcamp,
  AiRegistration
} from "./pages";
import { Navbar, Footer } from "./components/layout components";
import Refund from "./pages/Refund";
import ExcelDownload from "./pages/ExcelDownload";
import Paytm from "./pages/Paytm";
import Quiz from "./pages/Quiz/Quiz";
import PaymentButton from "./pages/PaymentButton";
import RedirectPage from "./pages/RedirectPage";

const App = () => {
  return (
    <div className="font-manrope bg-gradient-to-br from-indigo-900 via-gray-900 to-slate-900 text-white overflow-x-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/download/excel" element={<ExcelDownload />} />
          <Route path="/" element={<Home />} />
          <Route path="/brainteaser" element={<Quiz />} />
          <Route path="/register" element={<Register />} />
          <Route path="/aboutus" element={<AboutUS />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/dcma" element={<DCMA />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/paytm" element={<Paytm />} /> {/* Added a missing slash before "paytm" */}
          <Route path="/terms" element={<Terms />} />
          <Route path="/airegistration" element={<AiRegistration />} />
          <Route path="/paymentbutton" element={<PaymentButton />} />
          <Route path="/redirectpage" element={<RedirectPage />} />
          <Route path="/bootcamps">
            <Route path="ethereum" element={<Ethereum />} /> {/* Added a missing slash before "ethereum" */}
            <Route path="aibootcamp" element={<AiBootcamp />} /> {/* Added a missing slash before "aibootcamp" */}
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
