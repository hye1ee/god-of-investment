import styled from "styled-components";
import { AbsoluteWrapper, Wrapper } from "../../components/Wrapper";
import { appColor, height_size, width_size } from "../../../utils/style";
import { MediumText, RegularText } from "../../components/Text";
import { BorderColumn, BorderRow } from "../../components/Border";

interface DataTableProps {
  title: string;
  labels: string[];
  data: number[];
}

// row height - 39px, 29px, 29px

const DataTable = (props: DataTableProps) => {
  return (
    <DataTableWrapper>
      <Wrapper
        direction="row"
        color="purpleLight"
        width="full"
        center={true}
        height={39}
      >
        <MediumText size={15}>{props.title}</MediumText>
        <AbsoluteWrapper direction="row" right={15}>
          <RegularText color="gray" size={13}>
            단위: 만원
          </RegularText>
        </AbsoluteWrapper>
      </Wrapper>
      <BorderRow width={1} color="grayLight" />
      <DataTableRow value={props.labels} color={true} />
      <DataTableRow value={props.data} color={false} />
    </DataTableWrapper>
  );
};
export default DataTable;

const DataTableWrapper = styled.div`
  width: ${width_size(860)};
  height: ${height_size(101)};

  box-sizing: border-box;
  border: ${width_size(1)} solid ${appColor.grayLight};
  background-color: ${appColor.white};
  border-radius: ${width_size(10)};

  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

interface DataTableRowProps {
  value: (number | string)[];
  color: boolean;
}

const DataTableRow = (props: DataTableRowProps) => {
  const colWidth = (860 - props.value.length - 1) / props.value.length;

  return (
    <Wrapper direction="row" height={29} width="full">
      {props.value.map((val, idx) => {
        if (typeof val == "number") val = val.toLocaleString();
        return (
          <>
            <Wrapper
              direction="row"
              width={colWidth}
              height="full"
              color={props.color ? "purpleBright" : "white"}
              center={true}
            >
              <RegularText size={14}>{val}</RegularText>
            </Wrapper>
            {idx !== props.value.length - 1 && (
              <BorderColumn width={1} color="grayLight" />
            )}
          </>
        );
      })}
    </Wrapper>
  );
};
