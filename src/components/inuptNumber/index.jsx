import { memo, useState, useEffect } from "react";

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

  const onKeyPress = (e) => {
    var theEvent = e || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    //var regex = /^[0-9.,]+$/;
    var regex = /^[0-9.]+$/;
    if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
    }
  };

  return (
    <ST.Container>
      <ST.Label>{label}</ST.Label>
      <ST.Input
        type={"number"}
        value={dataValue}
        onChange={_onChange}
        onKeyPress={onKeyPress}
      />
    </ST.Container>
  );
};

export default memo(InputNumber);
