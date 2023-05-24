import axios from "axios";
import { host } from ".";

export const getMemos = async (): Promise<any> => {
  return await axios
    .get(host + "/memos")
    .then((res) => {
      return res.data;
    });
};

export const deleteMemo = async ({ id, memoId }: { id: string, memoId: string }): Promise<any> => {
  return await axios
    .delete(host + "/memo/" + memoId, { params: { memo_id: memoId, user_id: id } })
    .then(() => {
      return true;
    }).catch(() => { return false; });
};


export const createMemo = async ({ id, consId, text }: { id: string, consId: string, text: string }): Promise<boolean> => {
  return await axios
    .post(host + "/memo", {
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
