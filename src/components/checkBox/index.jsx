import { memo, useState } from "react";

import * as ST from "./styles";

const CheckBox = ({ label }) => {
  const [value, setValue] = useState(false);
  const _onChange = (e) => {
    setValue(e.target.checked === true);
  };
  const _onClick = () => {
    // console.log("11");
    // setValue(!!value);
  };

  return (
    <ST.Container>
      <ST.Input>
        <input
          type="checkbox"
          id="scales"
          name="scales"
          checked={value}
          onChange={_onChange}
        />
      </ST.Input>
      <ST.Label onClick={_onClick}>{label}</ST.Label>
    </ST.Container>
  );
};

export default memo(CheckBox);
