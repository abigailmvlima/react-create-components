import { memo } from "react";
import { useSelector } from "react-redux";

import Librarys from "../../components/librarys";

import * as ST from "./styles";

const Home = () => {
  const stateData = useSelector((s) => s?.LIBRARYS);
  return (
    <ST.Container>
      <ST.ContentTitulo>
        <ST.Titulo>Biblioteca de Componentes</ST.Titulo>
        <ST.TituloSec>Lista de Componentes</ST.TituloSec>
      </ST.ContentTitulo>
      <ST.Form>
        {stateData?.data.map((row, key) => {
          return (
            <Librarys
              key={key}
              label={row.label}
              description={row.description}
              name={row.name}
            />
          );
        })}
      </ST.Form>
    </ST.Container>
  );
};

export default memo(Home);
