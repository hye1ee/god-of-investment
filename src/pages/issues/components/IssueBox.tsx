import { useEffect, useState } from "react";
import { getIssues } from "../../../apis/issue";
import { Wrapper } from "../../components/Wrapper";
import BoxLayout from "../../detail/components/BoxLayout";
import { IssueContainer } from "./IssueContainer";
import { RootState } from "../../../states/store";
import { useDispatch, useSelector } from "react-redux";
import { RegularText } from "../../components/Text";
import { updateIssue } from "../../../states/issueSlice";

const IssueBox = () => {
  const [issues, setIssues] = useState<any[]>([]);
  const issueId = useSelector((state: RootState) => state.issue.id);
  const consId = useSelector((state: RootState) => state.target.id);
  const dispatch = useDispatch();

  const asyncWrapper = async () => {
    dispatch(updateIssue({ id: null, summary: null }));

    if (!consId) return;
    let newIssues = await getIssues(consId);
    newIssues.forEach((issue: any) => {
      issue.pubDate = new Date(issue.pubDate);
    });

    newIssues = newIssues.sort((a: any, b: any) => b.pubDate - a.pubDate);
    setIssues(newIssues);
  };

  const setIssue = (id: number) => {
    const targetIssue = issues.find((issue) => issue.id == id);
    dispatch(updateIssue({ id, summary: targetIssue.gpt_summary }));
  };

  useEffect(() => {
    asyncWrapper();
  }, []);

  return (
    <BoxLayout width={362} color="white" title="사업 연관 이슈">
      <Wrapper direction="column" gap={10} width="full">
        {issues.length == 0 && (
          <Wrapper direction="row" width="full" center={true}>
            <RegularText size={13} color="gray">
              이슈 연동 준비 중
            </RegularText>
          </Wrapper>
        )}
        {issues.map((issue) => (
          <IssueContainer
            key={issue.id}
            src={issue.media}
            url={issue.url}
            title={issue.title}
            date={[
              issue.pubDate.getFullYear(),
              issue.pubDate.getMonth(),
              issue.pubDate.getDate(),
            ].join("-")}
            active={issueId == issue.id}
            onClick={() => setIssue(issue.id)}
          />
        ))}
      </Wrapper>
    </BoxLayout>
  );
};

export default IssueBox;
