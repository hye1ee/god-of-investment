import styled from "styled-components";
import Tag from "../../../components/Tag";
import { height_size } from "../../../../utils/style";

export default ({ num }: { num: number }) => {
  return (
    <SearchModalWrapper>
      <Tag
        textOption={{
          text: `${num}개의 검색결과가 확인되었습니다.`,
          weight: "regular",
          size: 14,
          color: "gray",
        }}
        radius={20}
        color="white"
        paddingOption={{ width: 20, height: 8 }}
        borderOption={{ width: 1, color: "grayLight" }}
      />
    </SearchModalWrapper>
  );
};

const SearchModalWrapper = styled.div`
  width: fit-content;
  height: fit-content;

  position: absolute;
  bottom: ${height_size(30)};
  left: 50%;
  transform: translate(-50%, 0);

  z-index: 99;
`;
