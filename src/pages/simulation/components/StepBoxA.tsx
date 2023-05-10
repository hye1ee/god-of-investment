import { useEffect, useState } from "react";

import { Wrapper } from "../../components/Wrapper";
import { MediumText } from "../../components/Text";
import StepBoxLayout from "./StepBoxLayout";
import { SubBoxShortWrapper, SubBoxWrapper } from "./SubBox";
import DropDown from "./DropDown";
import { useDispatch, useSelector } from "react-redux";
import {
  updateDong,
  updateHo,
  updateSize,
  updateStep,
} from "../../../states/simulationSlice";
import { getDongHo, getLastSimulationDate, getSize } from "../utils";
import { RootState } from "../../../states/store";

const StepBoxA = ({
  id,
  name,
  step,
}: {
  id: string;
  name: string;
  step: string;
}) => {
  const dispatch = useDispatch();

  const asyncWrapper = async () => {
    const date = await getLastSimulationDate(name);
    if (date == null) return;
    const newDongHoList = await getDongHo(id, date);
    const newSizeList = await getSize(id);
    setDongList(newDongHoList.dong);
    dispatch(updateDong({ dong: newDongHoList.dong[0] }));

    setHoList(newDongHoList.ho);
    dispatch(updateHo({ ho: newDongHoList.ho[0] }));

    setSizeList(newSizeList);
    dispatch(updateSize({ size: newSizeList[0] }));
  };

  useEffect(() => {
    asyncWrapper();
  }, []);

  const [dongList, setDongList] = useState<string[]>([]);
  const [hoList, setHoList] = useState<string[]>([]);
  const [sizeList, setSizeList] = useState<number[]>([]);

  const dong = useSelector((state: RootState) => state.simulation.dong);
  const ho = useSelector((state: RootState) => state.simulation.ho);
  const size = useSelector((state: RootState) => state.simulation.size);

  return (
    <StepBoxLayout
      step={1}
      active={step == "A"}
      onClick={() => dispatch(updateStep({ step: "A" }))}
      title={{
        text: [
          "현재 보유 중인 아파트의 정보",
          "와",
          " ",
          "희망하는 아파트의 정보",
          "를 입력해주세요!",
        ],
        weight: "medium",
        size: 17,
        color: ["purple", "black", "black", "purple", "black"],
      }}
    >
      {dong !== null && ho !== null && size !== null && (
        <Wrapper direction="row" gap={20}>
          <SubBoxShortWrapper>
            <MediumText size={16}>{"현재 보유 아파트 정보"}</MediumText>
            <Wrapper direction="row" gap={15}>
              <DropDown
                value={dong}
                list={dongList}
                onSelect={(val) => dispatch(updateDong({ dong: val }))}
                active={step == "A"}
              />
              <DropDown
                value={ho}
                list={hoList}
                onSelect={(val) => dispatch(updateHo({ ho: val }))}
                active={step == "A"}
              />
            </Wrapper>
          </SubBoxShortWrapper>
          <SubBoxShortWrapper>
            <MediumText size={16}>{"희망 아파트 정보"}</MediumText>
            <DropDown
              value={size.toString() + "m²"}
              list={sizeList.map((size) => size.toString())}
              onSelect={(val) => dispatch(updateSize({ size: parseInt(val) }))}
              active={step == "A"}
            />
          </SubBoxShortWrapper>
        </Wrapper>
      )}
    </StepBoxLayout>
  );
};
export default StepBoxA;
