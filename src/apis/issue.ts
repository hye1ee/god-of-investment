import axios from "axios";
import { host } from ".";

export const getIssues = async (consId: string): Promise<any> => {
  return await axios
    .get(host + "/issue/news_all/" + consId)
    .then((res) => {
      return res.data;
    });
};


export const getIssueStat = async (consId: string): Promise<any> => {
  return await axios
    .get(host + "/issue/stats/" + consId)
    .then((res) => {
      return res.data;
    });
};