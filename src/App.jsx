// src/App.jsx
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

const Home = lazy(() => import("./components/Home"));
const ServiceDetail = lazy(() => import("./components/ServiceDetail")); // keep deep-link optional

function Loader() {
  return (
    <div className="min-h-[40vh] flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.1, ease: "linear" }}
        className="h-8 w-8 rounded-full border-4 border-slate-200 border-t-sky-600"
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white text-slate-800">
        <Navbar />

        <main className="flex-1">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              {/* fallback: keep routing to home for unknown routes so site feels single-page */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
