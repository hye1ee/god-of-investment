import React, { useState } from "react";
import SignupInput from "./SignupInput";
import { Wrapper } from "../../components/Wrapper";

import EmailIcon from "../../../assets/email.svg";
import PassWordIcon from "../../../assets/password.svg";
import DepartIcon from "../../../assets/depart.svg";
import PersonIcon from "../../../assets/person.svg";
import styled from "styled-components";

import { appColor, height_size, width_size } from "../../../utils/style";
import Tag from "../../components/Tag";
import { SignupInfoProps } from "../utils";

interface SignupBodyProps {
  signupInfo: SignupInfoProps;
  setSignupInfo: (key: string, val: string) => void;

  departList: string[];
  setModal: () => void;
}

export default (props: SignupBodyProps) => {
  const [toggle, setToggle] = useState(false);

  return (
    <Wrapper direction="column" center={true} gap={15}>
      <SignupInput
        onChange={(e) => props.setSignupInfo("name", e.target.value)}
        value={props.signupInfo.name}
        placeholder="이름"
        iconOption={{ icon: PersonIcon, width: 20, height: 26 }}
      />
      <SignupInput
        onChange={(e) => props.setSignupInfo("email", e.target.value)}
        value={props.signupInfo.email}
        placeholder="이메일"
        iconOption={{ icon: EmailIcon, width: 20, height: 16 }}
      />
      <SignupInput
        type="password"
        onChange={(e) => props.setSignupInfo("password", e.target.value)}
        value={props.signupInfo.password}
        placeholder="비밀번호"
        iconOption={{ icon: PassWordIcon, width: 18, height: 23 }}
      />
      <Wrapper direction="column">
        <SignupInput
          onChange={() => {}}
          value={props.signupInfo.depart}
          placeholder="부서"
          iconOption={{ icon: DepartIcon, width: 22, height: 22 }}
          active={false}
          onClick={() => setToggle((val) => !val)}
        />
        {toggle && (
          <DepartWrapper>
            <Tag
              textOption={{
                text: "클릭하여 부서 추가하기",
                weight: "medium",
                color: "gray",
                size: 15,
              }}
              radius={0}
              color=""
              paddingOption={{ width: 0, height: 0 }}
              onClick={props.setModal}
            />
            <Wrapper direction="row" gap={10} wrap={true} width={400}>
              {props.departList.map((depart) => (
                <Tag
                  textOption={{
                    text: depart,
                    weight: "medium",
                    color: "white",
                    size: 14,
                  }}
                  radius={8}
                  color="blue"
                  paddingOption={{ width: 15, height: 5 }}
                  onClick={() => {
                    props.setSignupInfo("depart", depart);
                    setToggle(false);
                  }}
                />
              ))}
            </Wrapper>
          </DepartWrapper>
        )}
      </Wrapper>
    </Wrapper>
  );
};

const DepartWrapper = styled.div`
  width: 100%;
  height: fit-content;
  background-color: ${appColor.whiteSmoky};

  box-sizing: border-box;
  padding: ${height_size(15)} ${width_size(20)};

  display: flex;
  flex-direction: column;
  gap: ${height_size(10)};
`;
