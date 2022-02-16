import { memo } from "react";
import actions from "../../stores/actions";

import * as ST from "./styles";

const Librarys = ({ label, description, name }) => {
  const onClick = () => {
    actions.navigate.show("/details", { label, description, name });
  };
  return (
    <ST.Container>
      <ST.Column50>
        <ST.ContentInfo>
          <ST.Name>{label}</ST.Name>
          <ST.Description>{description}</ST.Description>
          <ST.ViewMore onClick={onClick}>Ler Mais</ST.ViewMore>
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
