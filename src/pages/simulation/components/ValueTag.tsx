import Tag from "../../components/Tag";

const ValueTag = ({ value }: { value: string }) => {
  return (
    <Tag
      textOption={{
        text: value,
        weight: "medium",
        size: 16,
        color: "black",
      }}
      radius={6}
      color="white"
      paddingOption={{ width: 20, height: 5 }}
      borderOption={{
        width: 1,
        color: "grayLight",
      }}
    />
  );
};

export default ValueTag;
