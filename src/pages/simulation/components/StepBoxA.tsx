import { useEffect, useState } from "react";

import { Wrapper } from "../../components/Wrapper";
import { MediumText } from "../../components/Text";
import StepBoxLayout from "./StepBoxLayout";
import { SubBoxShortWrapper } from "./SubBox";
import DropDown from "./DropDown";
import { useDispatch, useSelector } from "react-redux";
import {
  updateDong,
  updateHo,
  updateSize,
  updateStep,
} from "../../../states/simulationSlice";
import { getDongHo, getLastDate, getSize } from "../../../apis/simulation";
import { RootState } from "../../../states/store";

const StepBoxA = ({ id, step }: { id: string; step: string }) => {
  const dispatch = useDispatch();

  const asyncWrapper = async () => {
    const lastDate = await getLastDate(id);
    const newDongHoList = await getDongHo(id);
    const newSizeList = await getSize(id, lastDate);
    if (newDongHoList == null || newSizeList == null) {
      return;
    }
    setDonghoList(newDongHoList);
    dispatch(updateDong({ dong: Object.keys(newDongHoList)[0] }));
    dispatch(updateHo({ ho: Object.values(newDongHoList)[0][0] }));

    setSizeList(newSizeList);
    dispatch(updateSize({ size: newSizeList[0] }));
  };

  useEffect(() => {
    asyncWrapper();
  }, []);

  const [donghoList, setDonghoList] = useState<null | Record<string, string[]>>(
    null
  );
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
      {dong !== null && ho !== null && size !== null && donghoList !== null && (
        <Wrapper direction="row" gap={20}>
          <SubBoxShortWrapper>
            <MediumText size={16}>{"현재 보유 아파트 정보"}</MediumText>
            <Wrapper direction="row" gap={15}>
              <DropDown
                value={dong}
                list={Object.keys(donghoList)}
                onSelect={(val) => {
                  dispatch(updateDong({ dong: val }));
                  dispatch(updateHo({ ho: donghoList[dong][0] }));
                }}
                active={step == "A"}
              />
              <DropDown
                value={ho}
                list={donghoList[dong]}
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
