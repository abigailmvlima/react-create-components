import librarys from "./data";

const name = "LIBRARYS";

const states = {
  name: `${name}`,
  success: `${name}_SUCCESS`,
  error: `${name}_ERROR`,
  initial: {
    loading: false,
    loaded: true,
    error: false,
    data: librarys,
  },
};

const dataExport = { states };
export default dataExport;
