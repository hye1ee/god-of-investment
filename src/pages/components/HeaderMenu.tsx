import { useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";
import { Wrapper } from "./Wrapper";

export default () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Wrapper direction="row" gap={30} center={true}>
      <Button
        onClick={() => navigate("/detail")}
        transparent={true}
        textOption={{
          text: "상세정보",
          color: location.pathname === "/detail" ? "purple" : "black",
          size: 15,
          weight: "medium",
        }}
      />
      <Button
        onClick={() => navigate("/issues")}
        transparent={true}
        textOption={{
          text: "이슈 모니터링",
          color: location.pathname === "/issues" ? "purple" : "black",
          size: 15,
          weight: "medium",
        }}
      />
      <Button
        onClick={() => navigate("/simulation")}
        transparent={true}
        textOption={{
          text: "분담금 시뮬레이션",
          color: location.pathname === "/simulation" ? "purple" : "black",
          size: 15,
          weight: "medium",
        }}
      />
      <Button
        onClick={() => navigate("/search")}
        transparent={true}
        textOption={{
          text: "유사도 검색",
          color: location.pathname === "/search" ? "purple" : "black",
          size: 15,
          weight: "medium",
        }}
      />
    </Wrapper>
  );
};
