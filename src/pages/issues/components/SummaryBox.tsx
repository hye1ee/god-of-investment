import React from "react";
import { Wrapper } from "../../components/Wrapper";
import BoxLayout from "../../detail/components/BoxLayout";
import { IssueContainer } from "./IssueContainer";

const SummaryBox = () => {
  return (
    <BoxLayout width={820} color="purpleBright" title="이슈 요약"></BoxLayout>
  );
};

export default SummaryBox;
