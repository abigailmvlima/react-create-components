import { memo } from "react";

import * as ST from "./styles";

const Select = ({ value, data }) => {
  return (
    <ST.Container>
      <select name="select" defaultValue={value}>
        {data &&
          data.map((row, key) => {
            return <option key={key} label={row.label} value={row.value} />;
          })}
      </select>
    </ST.Container>
  );
};

export default memo(Select);
