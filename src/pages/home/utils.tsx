import { useSelector } from "react-redux";
import { RootState } from "../../states/store";
import axios from "axios";

export const stepNames: { [key: string]: { display: string; name: string } } = {
  1: {
    display: "1. ",
    name: "",
  },
  2: {
    display: "1. ",
    name: "",
  },
  3: {
    display: "1. ",
    name: "",
  },
  4: {
    display: "1. ",
    name: "",
  },
  5: {
    display: "1. ",
    name: "",
  },
};

export const typeNames = {
  redevelop: { display: "재개발 사업", name: "재개발" },
  reconstruct: { display: "재건축 사업", name: "재건축" },
};

export const getConstructions = async (districtName: string) => {
  let result: any;
  await axios.get("http://143.248.90.184:443/constructions").then((res) => {
    result = res.data.filter((data: any) => data.GU_NM === districtName);
  });
  return result;
};

export const filterConstructions = (data: any) => {
  const search = useSelector((state: RootState) => state.search);

  const districtName = search.location.district;
  const selectStepName = [];
  search.step.forEach((active, idx) => {
    if (active) selectStepName.push(stepNames[idx].name);
  });
};
