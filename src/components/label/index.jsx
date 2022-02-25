import { memo } from "react";

import * as ST from "./styles";

const CLabel = (props) => {
  const { label } = props;
  return <ST.Container>{label}</ST.Container>;
};

export default memo(CLabel);
