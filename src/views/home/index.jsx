import { memo } from "react";
import Librarys from "../../components/Librarys";

import * as ST from "./styles";

const Home = () => {
  return (
    <ST.Container>
      <ST.ContentTitulo>
        <ST.Titulo>Biblioteca de Componentes</ST.Titulo>
        <ST.TituloSec>Lista de Componentes</ST.TituloSec>
      </ST.ContentTitulo>
      <ST.Form>
        <Librarys />
      </ST.Form>
    </ST.Container>
  );
};

export default memo(Home);
