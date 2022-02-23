import { memo, useState, useEffect, useLayoutEffect } from "react";

import * as ST from "./styles";

const InputNumber = ({ label, value, onChange }) => {
  const [dataValue, setDataValue] = useState("");

  useEffect(() => {
    if (!value) return;
    if (value == dataValue) return;
    setDataValue(value);
  }, [value]);

  const _onChange = (event) => {
    const temp = event.target.value;
    setDataValue(temp);
    onChange && onChange(temp);
  };

  return (
    <ST.Container>
      <ST.Label>{label}</ST.Label>
      <ST.Input value={dataValue} onChange={_onChange} />
    </ST.Container>
  );
};

export default memo(InputNumber);
