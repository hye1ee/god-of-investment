import axios from "axios";
import { host } from ".";

export const getConstructionInfo = async (consId: string): Promise<any> => {
  return await axios
    .get(host + "/construction/" + consId)
    .then((res) => {
      return res.data;
    });
};
