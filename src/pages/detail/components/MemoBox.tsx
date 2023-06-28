import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BoxLayout from "./BoxLayout";
import { appColor, height_size, width_size } from "../../../utils/style";
import { AbsoluteWrapper, Wrapper } from "../../components/Wrapper";
import { BoldText, MediumText, RegularText } from "../../components/Text";

import Input from "../../components/Input";
import AddIcon from "../../../assets/add.svg";
import { createMemo, deleteMemo, getMemos } from "../../../apis/memo";
import { useSelector } from "react-redux";
import { RootState } from "../../../states/store";
import { getUsers } from "../../../apis/user";

const MemoBox = () => {
  const id = useSelector((state: RootState) => state.user.id);
  const consId = useSelector((state: RootState) => state.target.id);
  if (!consId) return <></>; 

  const [newMemo, setNewMemo] = useState("");
  const [memos, setMemos] = useState<any[]>([]);

  const asyncWrapper = async () => {
    const users = await getUsers();
    const userTitle = {} as Record<string, string>;
    users.forEach((user: any) => {
      userTitle[user.id] = `${user.name}(${user.role})`;
    });

    const newMemos = await getMemos();

    newMemos.forEach((memo: any) => {
      memo["title"] = userTitle[memo.user_id];
    });
    setMemos(newMemos);
  };

  useEffect(() => {
    asyncWrapper();
  }, []);

  const asyncCreateWrapper = async () => {
    await createMemo({ id, consId, text: newMemo });
    asyncWrapper();
  };

  const asyncDeleteWrapper = async (memoId: string) => {
    await deleteMemo({ id, memoId });
    setNewMemo("");
    asyncWrapper();
  };

  return (
    <BoxLayout width={380} color="white" title="메모">
      {memos.map((memo) => {
        return (
          <MemoBlock
            title={memo.title}
            text={memo.memo_text}
            delete={memo.user_id == id}
            onDelete={() => asyncDeleteWrapper(memo.id)}
          />
        );
      })}

      <Wrapper direction="row" gap={15} center={true}>
        <Input
          width={340}
          height={40}
          color="whiteSmoky"
          radiusOption={{ radius: 15 }}
          onChange={(e) => setNewMemo(e.target.value)}
          value={newMemo}
          placeholder="메모 추가하기"
          padding={10}
          fontOption={{ size: 14, weight: "medium", color: "black" }}
        />
        <AbsoluteWrapper
          direction="row"
          right={10}
          center={true}
          onClick={asyncCreateWrapper}
        >
          <IconWrapper src={AddIcon} />
        </AbsoluteWrapper>
      </Wrapper>
    </BoxLayout>
  );
};
export default MemoBox;

interface MemoBlockProps {
  title: string;
  text: string;
  delete: boolean;
  onDelete: () => void;
}

const MemoBlock = (props: MemoBlockProps) => {
  return (
    <MemoBlockWrapper {...props}>
      <Wrapper direction="column" width="full">
        <Wrapper direction="row" width="full">
          <BoldText size={14}>{props.title}</BoldText>
          {props.delete && (
            <MemoDeleteWrapper onClick={props.onDelete}>
              <MediumText size={13} color="gray">
                삭제하기
              </MediumText>
            </MemoDeleteWrapper>
          )}
        </Wrapper>
        <RegularText size={14}>{props.text}</RegularText>
      </Wrapper>
    </MemoBlockWrapper>
  );
};
const MemoBlockWrapper = styled.div<MemoBlockProps>`
  width: ${width_size(340)};
  height: fit-content;

  padding: ${height_size(20)} ${width_size(22)};
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${height_size(25)};

  background-color: ${(props) =>
    props.delete ? appColor.purpleLight : appColor.purpleBright};
  border-radius: ${height_size(10)};
`;

const IconWrapper = styled.img`
  width: ${width_size(25)};
  cursor: pointer;
`;

const MemoDeleteWrapper = styled.div`
  cursor: pointer;
  position: absolute;
  right: 0;
`;
