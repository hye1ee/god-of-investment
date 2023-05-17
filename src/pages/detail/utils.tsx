import axios from "axios";

export const getInformation = async (conIdx: number) => {
  let result: any;
  await axios.get("http://143.248.90.184:443/constructions").then((res) => {
    result = res.data.filter((data: any) => data.GU_NM === districtName);
  });
  return result.sort(
    (a: any, b: any) => b.reprsnt_coord_lng - a.reprsnt_coord_lng
  );
};