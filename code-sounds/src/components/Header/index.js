import React from "react";
import Cover from "../../assets/copia-cover.svg";
import { Navegation, CoverImage } from "./styles";

const Header = () => {
  return (
    <CoverImage>
      <img src={Cover} alt="Capa" />
      <Navegation>
          <ul>
              <li>Home</li>
              <li>Login</li>
              <li>Cadastrar</li>
          </ul>
      </Navegation>
    </CoverImage>
  );
};

export default Header;
