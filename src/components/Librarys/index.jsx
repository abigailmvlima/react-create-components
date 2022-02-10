import { memo } from "react";
import { useSelector } from "react-redux";

import * as ST from "./styles";

const Librarys = () => {
  return (
    <ST.Container>
      <ST.Column50>
        <ST.ContentInfo>
          <ST.Name>Name</ST.Name>
          <ST.Description>Descrição</ST.Description>
          <ST.ViewMore>Ler Mais</ST.ViewMore>
        </ST.ContentInfo>
      </ST.Column50>
      <ST.Column50>
        <ST.ContentImg>
          <ST.Img>Foto</ST.Img>
        </ST.ContentImg>
      </ST.Column50>
    </ST.Container>
  );
};

export default memo(Librarys);
