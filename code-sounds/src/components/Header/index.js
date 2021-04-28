import React from "react";
import Cover from "../../assets/copia-cover.svg";
import { Navegation, CoverImage } from "./styles";

const Header = () => {
  return (
    <CoverImage>
      <img src={Cover} alt="Capa" />
      <Navegation />
    </CoverImage>
  );
};

export default Header;
