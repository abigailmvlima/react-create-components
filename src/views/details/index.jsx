import { memo } from "react";
import { useSelector } from "react-redux";
import comp from "../../components";
import actions from "../../stores/actions";

import * as ST from "./styles";

const Details = () => {
  const dataState = useSelector((s) => s?.NAVIGATE?.data);
  const getComp = () => {
    const Component = comp[dataState.name];
    if (!Component) return <div>Componente não encontrado</div>;
    return <Component {...dataState} />;
  };
  const onClick = () => {
    actions.navigate.show("/");
  };

  return (
    <ST.Container>
      <ST.Header>
        <div>Detalhes</div>
      </ST.Header>
      <ST.Form>
        <ST.Titulo>
          <ST.Label>{dataState.label}</ST.Label>
          <ST.Close onClick={onClick}>x</ST.Close>
        </ST.Titulo>
        <ST.Description>{dataState.description}</ST.Description>
        <ST.NameComponent>
          Nome do Componente: {dataState.name}
        </ST.NameComponent>
        <ST.Componet>{getComp()}</ST.Componet>
      </ST.Form>
    </ST.Container>
  );
};

export default memo(Details);
