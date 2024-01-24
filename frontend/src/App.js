import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <main className="py-4 px-8">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
}
