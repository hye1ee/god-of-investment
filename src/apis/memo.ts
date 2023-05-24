import axios from "axios";
import { host } from ".";

export const getMemos = async (): Promise<any> => {
  return await axios
    .get(host + "/memos")
    .then((res) => {
      return res.data;
    });
};

export const createMemo = async ({ id, consId, text }: { id: number, consId: number, text: string }): Promise<boolean> => {
  return await axios
    .post(host + "/construction_stat/", {
      "user_id": id,
      "construction_id": consId,
      "memo_text": text,
      "time": "2023-05-24T15:47:09.988Z",
      "memo_type": 0
    })
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
};
