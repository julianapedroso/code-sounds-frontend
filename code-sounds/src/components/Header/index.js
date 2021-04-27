import React from "react";
import Cover from "../../assets/equalizer-cover.jpg";
import { CoverImage } from "./styles";

const Header = () => {
    return (
        <div>
            <CoverImage src={Cover} alt="Capa" />
        </div>
    )
}

export default Header;