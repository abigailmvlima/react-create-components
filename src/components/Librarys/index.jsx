import { memo } from "react";

import * as ST from "./styles";

const Librarys = ({ label, description }) => {
  return (
    <ST.Container>
      <ST.Column50>
        <ST.ContentInfo>
          <ST.Name>{label}</ST.Name>
          <ST.Description>{description}</ST.Description>
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
