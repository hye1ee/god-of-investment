import { TextBox } from "../../components/Text";
import { Wrapper } from "../../components/Wrapper";
import BoxLayout from "../../detail/components/BoxLayout";

const RelateBox = () => {
  return (
    <BoxLayout width={418} color="white" title="연관 사업">
      <Wrapper direction="column" gap={10}>
        <RelateTag title="성수동아 재건축" />
        <RelateTag title="성수동아 재건축" />
        <RelateTag title="성수동아 재건축" />
        <RelateTag title="성수동아 재건축" />
      </Wrapper>
    </BoxLayout>
  );
};

export default RelateBox;

const RelateTag = ({ title }: { title: string }) => {
  return (
    <TextBox
      width={378}
      height={34}
      textOption={{
        text: title,
        weight: "regular",
        color: "black",
        size: 13,
      }}
      color="purpleLight"
      radius={17}
    />
  );
};
