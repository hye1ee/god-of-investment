import styled from "styled-components";
import { Wrapper } from "../../components/Wrapper";
import { appColor, height_size, width_size } from "../../../utils/style";
import { MediumText, RegularText } from "../../components/Text";
import { BorderColumn, BorderRow } from "../../components/Border";

interface ListTableProps {
  title: string;
  prices: number[];
  years: number[];
}

// column width - 119px, 178px, 119px
// row height - 39px, 30px, 29px, 29px, 29px, 29px, 29px

const nameList = ["A", "B", "C", "D", "E"];

const ListTable = (props: ListTableProps) => {
  return (
    <ListTableWrapper>
      <Wrapper
        direction="row"
        color="purpleLight"
        width="full"
        center={true}
        height={39}
      >
        <MediumText color="16">{props.title}</MediumText>
      </Wrapper>
      <BorderRow width={1} color="grayLight" />
      <ListTableHeader />
      <BorderRow width={1} color="grayLight" />
      {nameList.map((name, idx) => {
        return (
          <>
            <ListTableRow
              name={name}
              price={props.prices[idx]}
              year={props.years[idx]}
            />
            {idx !== nameList.length && (
              <BorderRow width={1} color="grayLight" />
            )}
          </>
        );
      })}
    </ListTableWrapper>
  );
};
export default ListTable;

const ListTableWrapper = styled.div`
  width: ${width_size(420)};
  height: ${height_size(221)};

  box-sizing: border-box;
  border: ${width_size(1)} solid ${appColor.grayLight};
  background-color: ${appColor.white};
  border-radius: ${width_size(10)};

  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ListTableHeader = () => {
  return (
    <Wrapper direction="row" height={30}>
      <Wrapper
        direction="row"
        width={119}
        center={true}
        color="purpleBright"
        height="full"
      >
        <MediumText color="gray" size={14}>
          유사 부동산
        </MediumText>
      </Wrapper>
      <BorderColumn width={1} color="grayLight" />
      <Wrapper
        direction="row"
        width={178}
        center={true}
        color="purpleBright"
        height="full"
      >
        <MediumText color="gray" size={14}>
          매매 금액
        </MediumText>
      </Wrapper>
      <BorderColumn width={1} color="grayLight" />
      <Wrapper
        direction="row"
        width={119}
        center={true}
        color="purpleBright"
        height="full"
      >
        <MediumText color="gray" size={14}>
          준공연도
        </MediumText>
      </Wrapper>
    </Wrapper>
  );
};

interface ListTableRowProps {
  name: string;
  price: number;
  year: number;
}

const ListTableRow = (props: ListTableRowProps) => {
  return (
    <Wrapper direction="row" height={29}>
      <Wrapper direction="row" width={119} center={true} height="full">
        <RegularText size={14}>{"아파트 " + props.name}</RegularText>
      </Wrapper>
      <BorderColumn width={1} color="grayLight" />
      <Wrapper direction="row" width={178} center={true} height="full">
        <RegularText size={14}>
          {props.price.toLocaleString() + " 만원"}
        </RegularText>
      </Wrapper>
      <BorderColumn width={1} color="grayLight" />
      <Wrapper direction="row" width={119} center={true} height="full">
        <RegularText size={14}>{props.year + "년"}</RegularText>
      </Wrapper>
    </Wrapper>
  );
};
