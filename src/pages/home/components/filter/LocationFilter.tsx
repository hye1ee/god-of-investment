import { Wrapper } from "../../../components/Wrapper";
import Button from "../../../components/Button";
import { BorderRow } from "../../../components/Border";

export default () => {
  const onLocationFilter = () => {
    console.log("onLocationFilter button clicked");
  };

  return (
    <Wrapper direction="column" width="full">
      <Wrapper direction="row" width="full" height={59}></Wrapper>
      <BorderRow width={1} color="grayLight" />
      <Wrapper direction="row" width="full" height={288}></Wrapper>
      <BorderRow width={1} color="grayLight" />

      <Wrapper direction="row" width="full" height={75} center={true}>
        <Button
          onClick={onLocationFilter}
          textOption={{
            text: "해당 조건으로 검색하기",
            weight: "regular",
            size: 14,
            color: "white",
          }}
          color="purple"
          width={320}
          height={40}
          radius={10}
        />
      </Wrapper>
      <BorderRow width={1} color="grayLight" />
    </Wrapper>
  );
};
