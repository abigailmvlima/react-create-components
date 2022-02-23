import { memo, createElement } from "react";
import { useSelector } from "react-redux";
import comp from "../../components";

import * as ST from "./styles";

const Details = () => {
  const dataState = useSelector((s) => s?.NAVIGATE?.data);
  console.log(dataState);
  const getComp = () => {
    const Component = comp[dataState.name];
    if (!Component) return <div>Componente não encontrado</div>;
    return <Component />;
  };
  return (
    <ST.Container>
      <ST.Header>Detalhes</ST.Header>
      <ST.Form>
        <ST.Titulo>{dataState.label}</ST.Titulo>
        <ST.Description>{dataState.description}</ST.Description>
        <ST.Componet>{getComp()}</ST.Componet>
      </ST.Form>
    </ST.Container>
  );
};

export default memo(Details);
