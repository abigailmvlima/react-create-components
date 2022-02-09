import { memo } from "react";

import * as ST from "./styles";

const Home = () => {
  return (
    <ST.Container>
      <ST.ContentTitulo>
        <ST.Titulo>Biblioteca de Componentes</ST.Titulo>
        <ST.TituloSec>Lista de Componentes</ST.TituloSec>
      </ST.ContentTitulo>
      <ST.Form>teste</ST.Form>
    </ST.Container>
  );
};

export default memo(Home);
