import React from "react";
import { Header } from "../Header/Header.components";
import { Footer } from "../Footer/Footer.components";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main >{children}</main>
      <Footer />
    </>
  );
};