import { memo } from "react";
import Librarys from "../../components/Librarys";
import { useSelector } from "react-redux";
import data from "../../stores/librarys/data";

import * as ST from "./styles";

const Home = () => {
  const stateData = useSelector((s) => s?.Librarys);

  return (
    <ST.Container>
      <ST.ContentTitulo>
        <ST.Titulo>Biblioteca de Componentes</ST.Titulo>
        <ST.TituloSec>Lista de Componentes</ST.TituloSec>
      </ST.ContentTitulo>
      <ST.Form>
        {data.map((row, key) => {
          return (
            <Librarys
              key={key}
              label={row.label}
              description={row.description}
            />
          );
        })}
      </ST.Form>
    </ST.Container>
  );
};

export default memo(Home);
