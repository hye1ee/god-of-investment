import React, { useState } from "react";
import styled from "styled-components";
import { appColor, height_size, width_size } from "../../../utils/style";
import { MediumText } from "../../components/Text";
import { Wrapper } from "../../components/Wrapper";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { createDepart } from "../../../apis/user";

export const DepartModal = (props: { setModal: () => void }) => {
  const [depart, setDepart] = useState("");

  const addDepart = async () => {
    await createDepart(depart);
    props.setModal();
  };

  return (
    <DepartModalWrapper>
      <MediumText size={15}>부서 추가하기</MediumText>
      <Wrapper direction="row" gap={15}>
        <Input
          width={225}
          height={40}
          color="whiteSmoky"
          radiusOption={{ radius: 15 }}
          onChange={(e) => setDepart(e.target.value)}
          value={depart}
          placeholder="부서"
          padding={10}
          fontOption={{ size: 14, weight: "medium", color: "black" }}
        />
        <Button
          width={80}
          height={40}
          radius={10}
          color="purple"
          textOption={{
            text: "추가",
            weight: "medium",
            color: "white",
            size: 15,
          }}
          hoverOption={{ color: "purpleSoft" }}
          onClick={addDepart}
        />
      </Wrapper>
    </DepartModalWrapper>
  );
};
const DepartModalWrapper = styled.div`
  width: ${width_size(360)};
  height: fit-content;

  box-sizing: border-box;
  padding: ${height_size(20)} ${width_size(20)};
  background-color: ${appColor.white};
  border: ${width_size(1)} solid ${appColor.grayLight};
  border-radius: ${width_size(10)};

  display: flex;
  flex-direction: column;
  gap: ${height_size(15)};
`;
