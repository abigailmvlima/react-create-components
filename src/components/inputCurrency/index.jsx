import { memo } from "react";
import CurrencyInput from "react-currency-input-field";

import * as ST from "./styles";

const InputCurrency = () => {
  return (
    <ST.Container>
      <CurrencyInput
        id="input-example"
        name="input-name"
        placeholder="Please enter a number"
        defaultValue={1000}
        decimalsLimit={2}
        onValueChange={(value, name) => console.log(value, name)}
      />
    </ST.Container>
  );
};

export default memo(InputCurrency);
