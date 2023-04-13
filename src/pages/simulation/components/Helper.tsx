import styled from "styled-components";
import { Wrapper } from "../../components/Wrapper";
import { useEffect, useState } from "react";
import { MediumText } from "../../components/Text";
import { appColor, height_size, width_size } from "../../../utils/style";
import HelperImg from "../../../assets/question.svg";

const helperText = {
  감정평가액:
    "감정평가사의 감정평가 방식을 AI 기술을 사용하여 예측한 값입니다.\n기타 변수들로 인한 오차가 존재할 수 있습니다.\n\n일부 재건축 단지에 대해서만 제공\n매주 금요일 오전 업데이트\n    ※ 단, 휴일 등 조사불가 시 업데이트 되지 않습니다.\n저작권법, 콘텐츠산업진흥법 등 관련 법률에 의거 무단 사용이 금지됩니다.",
  "준공 후 예상시세":
    "AI 기술을 사용하여 준공 후 부동산의 가격을 현재 시세로 예측한 값입니다.\n시장 상황의 변동에 따라 실제 시세와 오차가 존재할 수 있습니다.\n\n일부 재건축 단지에 대해서만 제공\n현재 부동산 시장 상황을 반영\n매주 금요일 오전 업데이트\n    ※ 단, 휴일 등 조사불가 시 업데이트 되지 않습니다.\n저작권법, 콘텐츠산업진흥법 등 관련 법률에 의거 무단 사용이 금지됩니다.",
};

const Helper = ({ title }: { title: "감정평가액" | "준공 후 예상시세" }) => {
  const [hover, setHover] = useState(false);

  return (
    <Wrapper
      direction="row"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover && (
        <HelperPop>
          <MediumText size={14} color="gray">
            {helperText[title]}
          </MediumText>
        </HelperPop>
      )}
      <HelperIcon src={HelperImg} />
    </Wrapper>
  );
};
export default Helper;

const HelperPop = styled.div`
  width: ${width_size(490)};
  height: fit-content;

  box-sizing: border-box;
  padding: ${height_size(20)} ${width_size(25)};

  background-color: ${appColor.white};
  border: 1px solid ${appColor.grayLight};
  border-radius: ${height_size(20)};

  position: absolute;
  bottom: ${height_size(10)};
  white-space: pre-wrap;

  z-index: 99;
  cursor: pointer;
`;

const HelperIcon = styled.img`
  width: ${height_size(16)};
  height: ${height_size(16)};
`;
