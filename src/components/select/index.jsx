import { memo } from "react";

import * as ST from "./styles";

const Select = ({ value, data }) => {
  const _onChange = (event) => {
    console.log(event);
  };

  return (
    <ST.Container>
      <select name="select" defaultValue={value} onChange={_onChange}>
        {data &&
          data.map((row, key) => {
            return <option key={key} label={row.label} value={row.value} />;
          })}
      </select>
    </ST.Container>
  );
};

export default memo(Select);
