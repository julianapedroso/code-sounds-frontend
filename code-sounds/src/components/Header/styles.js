import styled from "styled-components";

export const CoverImage = styled.div`
  background-repeat: no-repeat;
  background-size: cover;

  img {
    width: 100%;
    margin-bottom: -0.5rem;
    height: 50%;
  }
  /* width: 100%;
  height: 10vh;
  min-height: 250px;
  background-image: url(https://image.freepik.com/vetores-gratis/fundo-colorido-da-onda-do-equalizador_23-2148435447.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
  object-fit: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  position: relative; */
`;

export const Navegation = styled.nav`
  background-image: linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
  );
  height: 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;

  /* ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr)
  } */
`;
