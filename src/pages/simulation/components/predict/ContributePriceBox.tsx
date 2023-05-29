import styled from "styled-components";
import { appColor, height_size, width_size } from "../../../../utils/style";
import { BoldText, MediumText, RegularText } from "../../../components/Text";
import { Wrapper } from "../../../components/Wrapper";

import ContributePriceIcon from "../../../../assets/simulate/contributePrice.svg";
import { useEffect, useState } from "react";
import { BorderRow } from "../../../components/Border";
import { PriceInput } from "./PriceInput";
import { OperationIcon } from "./OperationIcon";
import { useDispatch, useSelector } from "react-redux";
import { updateContributePrice } from "../../../../states/simulationSlice";
import { RootState } from "../../../../states/store";

export const ContributePriceBox = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState<string[]>(new Array(5).fill("0"));

  const updatePrice = () => {
    dispatch(
      updateContributePrice({
        price: Math.floor(
          (parseFloat(inputs[0]) / parseFloat(inputs[1])) *
            (parseFloat(inputs[2]) -
              parseFloat(inputs[3]) -
              parseFloat(inputs[4]))
        ),
      })
    );
  };

  useEffect(() => {
    updatePrice();
  }, [inputs]);

  const onChange = (val: string, idx: number) => {
    setInputs((prevInputs) => {
      const newInputs = [...prevInputs];
      newInputs[idx] = val;
      return newInputs;
    });
  };

  return (
    <PriceBoxWrapper>
      <PriceTitleWrapper>
        <MediumText size={16}>일반분양 기여금액</MediumText>
        <RegularText size={12} color="gray">
          일반분양 기여금액은 일반분양 수익과 일반분양 대지지분의 곱으로
          계산됩니다.
        </RegularText>
      </PriceTitleWrapper>

      <Wrapper direction="row" gap={15}>
        <PriceInputContainer>
          <PriceInputWrapper>
            <PriceInput
              value={inputs[0]}
              onChange={(val) => onChange(val, 0)}
              active={true}
              unit="만 원"
              title="일반분양 수익"
              width={181}
            />
            <Wrapper direction="row" width={32} height={32} center={true}>
              <OperationIcon operation="divide" />
            </Wrapper>
            <PriceInput
              value={inputs[1]}
              onChange={(val) => onChange(val, 1)}
              active={true}
              unit="m²"
              title="필요대지지분"
              width={181}
            />
            <Wrapper direction="row" width={32} height={32} center={true}>
              <OperationIcon operation="equal" />
            </Wrapper>
            <PriceInput
              value={(parseFloat(inputs[0]) / parseFloat(inputs[1])).toFixed(2)}
              onChange={(val) => {}}
              active={false}
              unit="만 원"
              title="m²당 일반분양 수익"
              width={149}
            />
          </PriceInputWrapper>

          <BorderRow width={1} color="purpleLight" />
          <PriceInputWrapper>
            <PriceInput
              value={inputs[2]}
              onChange={(val) => onChange(val, 2)}
              active={true}
              unit="m²"
              title="보유대지지분"
              width={97}
            />
            <Wrapper direction="row" width={32} height={32} center={true}>
              <OperationIcon operation="subtract" />
            </Wrapper>
            <PriceInput
              value={inputs[3]}
              onChange={(val) => onChange(val, 3)}
              active={false}
              unit="m²"
              title="조합원 분양 필요대지지분"
              width={148}
            />
            <Wrapper direction="row" width={32} height={32} center={true}>
              <OperationIcon operation="subtract" />
            </Wrapper>
            <PriceInput
              value={inputs[4]}
              onChange={(val) => onChange(val, 4)}
              active={false}
              unit="m²"
              title="기부채납 면적"
              width={85}
            />
            <Wrapper direction="row" width={32} height={32} center={true}>
              <OperationIcon operation="equal" />
            </Wrapper>
            <PriceInput
              value={(
                parseFloat(inputs[2]) -
                parseFloat(inputs[3]) -
                parseFloat(inputs[4])
              ).toFixed(2)}
              onChange={(val) => {}}
              active={false}
              unit="m²"
              title="일반분양 대지지분"
              width={149}
            />
          </PriceInputWrapper>
        </PriceInputContainer>
        <PriceContainer>
          <PriceContainerIcon src={ContributePriceIcon} />
          <Wrapper direction="row" center={true} gap={5}>
            <BoldText size={26} color="white">
              {(
                useSelector(
                  (state: RootState) => state.simulation.price.contribute
                ) ?? 0
              ).toLocaleString()}
            </BoldText>
            <BoldText size={18} color="white">
              만원
            </BoldText>
          </Wrapper>
        </PriceContainer>
      </Wrapper>
    </PriceBoxWrapper>
  );
};

const PriceBoxWrapper = styled.div`
  width: ${width_size(860)};
  height: ${height_size(248)};

  display: flex;
  flex-direction: column;
  gap: ${height_size(15)};

  box-sizing: border-box;
  padding: ${height_size(15)} ${width_size(20)};
  border: ${width_size(1)} solid ${appColor.grayLight};
  border-radius: ${width_size(10)};
`;

const PriceTitleWrapper = styled.div`
  width: full;
  height: fit-content;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const PriceContainer = styled.div`
  width: ${width_size(200)};
  height: ${height_size(180)};

  display: flex;
  flex-direction: column;
  gap: ${height_size(12)};
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  padding-top: ${height_size(10)};
  background-color: ${appColor.purple};
  border-radius: ${width_size(10)};
`;

const PriceContainerIcon = styled.img`
  height: ${height_size(40)};
`;

const PriceInputContainer = styled.div`
  width: ${width_size(605)};
  height: ${height_size(180)};

  display: flex;
  flex-direction: column;
  gap: ${height_size(16)};
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  padding: 0 ${width_size(10)};
  background-color: ${appColor.purpleBright};
  border: ${width_size(1)} solid ${appColor.purpleLight};
  border-radius: ${width_size(10)};
`;

const PriceInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
`;
