import data from "./data";

const name = "LIBRARYS";

const states = {
  name: `${name}`,
  success: `${name}_SUCCESS`,
  error: `${name}_ERROR`,
  initial: {
    loading: false,
    loaded: true,
    error: false,
    data,
  },
};

const dataExport = { states };
export default dataExport;
