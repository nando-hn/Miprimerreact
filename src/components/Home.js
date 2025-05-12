import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="container my-5 flex-grow-1 d-flex flex-column">
        <h1 className="text-center mb-4">Página de inicio</h1>

        <div className="d-flex flex-grow-1 align-items-center justify-content-center">
          <div className="card p-4" style={{ maxWidth: "500px", width: "100%" }}>
            <h5 className="text-center">Muestra</h5>
            <p className="text-center">Bootstrap</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
