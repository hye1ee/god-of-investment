import styled from "styled-components";
import BoxLayout from "./BoxLayout";
import { Wrapper } from "../../components/Wrapper";
import Button from "../../components/Button";
import { BorderRow } from "../../components/Border";
import { height_size, width_size } from "../../../utils/style";
import { MediumText, RegularText } from "../../components/Text";
import { useSelector } from "react-redux";
import { RootState } from "../../../states/store";
import { getConstructionSheet } from "../../../apis/detail";
import { useEffect } from "react";

const SheetBox = () => {
  const pnu = useSelector((state: RootState) => state.detail.target);

  const asyncWrapper = async () => {
    if (!pnu) return;
    const info = await getConstructionSheet(pnu);
    console.log(info);
  };

  useEffect(() => {
    asyncWrapper();
  }, [pnu]);

  return (
    <BoxLayout width={800} color="white" title="건축물 대장">
      {pnu ? (
        <Wrapper direction="row" width={"full"} gap={20}>
          <Wrapper direction="column" width={370} center={true}>
            <BorderRow width={1} color="grayLight" />
            <SheetRow title="신축년도" value="1994년 08월 05일" />
            <BorderRow width={1} color="grayLight" />
            <SheetRow title="건폐율" value="43.43%" />
            <BorderRow width={1} color="grayLight" />
            <SheetRow title="주용도" value="제2종근린생활시설" />
            <BorderRow width={1} color="grayLight" />
            <SheetRow title="지붕" value="기타지붕" />
            <BorderRow width={1} color="grayLight" />
            <SheetRow title="주차장" value="11대" />
            <BorderRow width={1} color="grayLight" />
          </Wrapper>
          <Wrapper direction="column" width={370} center={true}>
            <BorderRow width={1} color="grayLight" />
            <SheetRow title="연면적" value="1,121.34(㎡)" />
            <BorderRow width={1} color="grayLight" />
            <SheetRow title="용적률" value="432.3%" />
            <BorderRow width={1} color="grayLight" />
            <SheetRow title="주구조" value="일반철골구조" />
            <BorderRow width={1} color="grayLight" />
            <SheetRow title="규모" value="지상5/지하1" />
            <BorderRow width={1} color="grayLight" />
            <SheetRow title="승강기" value="-" />
            <BorderRow width={1} color="grayLight" />{" "}
          </Wrapper>
        </Wrapper>
      ) : (
        <Wrapper direction="row" width="full" center={true} height={50}>
          <MediumText size={13} color="grayLight">
            필지를 선택해주세요
          </MediumText>
        </Wrapper>
      )}

      {/* <Button
        width={760}
        height={40}
        color="purpleLight"
        textOption={{
          text: "층별정보 자세히 보기",
          weight: "medium",
          size: 12,
          color: "black",
        }}
        radius={20}
      /> */}
    </BoxLayout>
  );
};
export default SheetBox;

const SheetRow = ({ title, value }: { title: string; value: string }) => {
  return (
    <SheetRowWrapper>
      <MediumText size={12}>{title}</MediumText>
      <RegularText size={12} color="gray">
        {value}
      </RegularText>
    </SheetRowWrapper>
  );
};

const SheetRowWrapper = styled.div`
  width: ${width_size(350)};
  height: ${height_size(36)};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
