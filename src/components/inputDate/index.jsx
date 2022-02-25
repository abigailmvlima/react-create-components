import { memo } from "react";

import * as ST from "./styles";

const InputDate = () => {
  return (
    <ST.Container>
      <ST.Input>
        <input id="date" type="date"></input>
      </ST.Input>
    </ST.Container>
  );
};

export default memo(InputDate);
