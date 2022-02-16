import { memo } from "react";
import { useSelector } from "react-redux";

import * as ST from "./styles";

const Details = () => {
  const dataState = useSelector((s) => s?.NAVIGATE?.data);
  console.log(dataState);
  return <ST.Container>teste</ST.Container>;
};

export default memo(Details);
