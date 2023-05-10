import styled from "styled-components";
import { appColor, height_size, width_size } from "../../../../utils/style";
import { BoldText, MediumText, RegularText } from "../../../components/Text";
import { Wrapper } from "../../../components/Wrapper";

import BuildPriceIcon from "../../../../assets/simulate/buildPrice.svg";
import { useEffect, useState } from "react";
import { BorderRow } from "../../../components/Border";
import { PriceInput } from "./PriceInput";
import { OperationIcon } from "./OperationIcon";
import { useDispatch, useSelector } from "react-redux";
import { updateBuildPrice } from "../../../../states/simulationSlice";
import { RootState } from "../../../../states/store";
import { getContactland } from "../../../../apis/simulation";

export const BuildPriceBox = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState<string[]>(new Array(2).fill("0"));
  const [contactland, setContactland] = useState<number>(NaN);

  const asyncWrapper = async () => {
    setContactland(await getContactland());
  };

  const updatePrice = () => {
    dispatch(
      updateBuildPrice({
        price: Math.floor(
          parseFloat(inputs[0]) * contactland +
            parseFloat(inputs[0]) * contactland * parseFloat(inputs[1])
        ),
      })
    );
  };

  useEffect(() => {
    asyncWrapper();
  }, []);

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
        <MediumText size={16}>조합원 건축원가</MediumText>
        <RegularText size={12} color="gray">
          조합원 건축원가는 순수 건축비와 기타 건축비의 합으로 계산됩니다.
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
              title="m²당 시공비"
              width={181}
            />
            <Wrapper direction="row" width={32} height={32} center={true}>
              <OperationIcon operation="multiply" />
            </Wrapper>
            <PriceInput
              value={contactland.toString()}
              onChange={(val) => {}}
              active={false}
              unit="m²"
              title="계약면적"
              width={181}
            />
            <Wrapper direction="row" width={32} height={32} center={true}>
              <OperationIcon operation="equal" />
            </Wrapper>
            <PriceInput
              value={(parseFloat(inputs[0]) * contactland).toFixed(2)}
              onChange={(val) => {}}
              active={false}
              unit="만 원"
              title="순수 건축비"
              width={149}
            />
          </PriceInputWrapper>

          <BorderRow width={1} color="purpleLight" />
          <PriceInputWrapper>
            <PriceInput
              value={(parseFloat(inputs[0]) * contactland).toFixed(2)}
              onChange={(val) => {}}
              active={false}
              unit="만 원"
              title="순수 건축비"
              width={181}
            />
            <Wrapper direction="row" width={32} height={32} center={true}>
              <OperationIcon operation="multiply" />
            </Wrapper>
            <PriceInput
              value={inputs[1]}
              onChange={(val) => onChange(val, 1)}
              active={false}
              unit="%"
              title="비율"
              width={181}
            />
            <Wrapper direction="row" width={32} height={32} center={true}>
              <OperationIcon operation="equal" />
            </Wrapper>
            <PriceInput
              value={(
                parseFloat(inputs[0]) *
                contactland *
                parseFloat(inputs[1])
              ).toFixed(2)}
              onChange={(val) => {}}
              active={false}
              unit="만 원"
              title="기타 건축비"
              width={149}
            />
          </PriceInputWrapper>
        </PriceInputContainer>
        <PriceContainer>
          <PriceContainerIcon src={BuildPriceIcon} />
          <Wrapper direction="row" center={true} gap={5}>
            <BoldText size={26} color="white">
              {(
                useSelector(
                  (state: RootState) => state.simulation.price.build
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
