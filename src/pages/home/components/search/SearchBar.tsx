import styled from "styled-components";
import SearchImg from "../../../../assets/search.svg";
import {
  appColor,
  font_size,
  height_size,
  width_size,
} from "../../../../utils/style";
import { useState } from "react";

export default () => {
  const [input, setInput] = useState("");

  const onEnter = (evt: React.KeyboardEvent) => {
    if (evt.key == "Enter") {
      console.log("enter");
    }
  };

  return (
    <SearchBarWrapper>
      <SearchIcon src={SearchImg} />
      <SearchInput
        placeholder="사업장명으로 검색하기"
        onKeyUp={onEnter}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        spellCheck={false}
      />
    </SearchBarWrapper>
  );
};

const SearchBarWrapper = styled.div`
  width: fit-content;
  height: fit-content;

  position: absolute;
  left: 50%;
  top: ${height_size(35)};
  transform: translate(-50%, 0);

  z-index: 99;
`;

const SearchInput = styled.input`
  width: ${width_size(500)};
  height: ${height_size(50)};

  box-sizing: border-box;
  border-radius: ${height_size(20)};
  border: 1px solid ${appColor.grayLight};
  padding-left: ${width_size(50)};

  font-family: "Noto Sans KR", sans-serif;
  font-weight: 400;
  font-size: ${font_size(14)};
  color: ${appColor.gray};

  ::placeholder {
    color: ${appColor.grayLight};
  }

  background-color: ${appColor.white};
`;

const SearchIcon = styled.img`
  width: ${width_size(17)};

  position: absolute;
  left: ${width_size(20)};
  top: 50%;
  transform: translate(0, -50%);
`;
