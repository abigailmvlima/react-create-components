import navigate from "./navigate/reducer";
import librarys from "./librarys/reducer";

const dataExport = {
  ...navigate,
  ...librarys,
};

export default dataExport;
