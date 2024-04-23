import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7bbd7fea2ffe458baa9d190ad83bad4f",
  },
});
