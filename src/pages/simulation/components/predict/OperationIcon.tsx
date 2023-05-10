import styled from "styled-components";
import { width_size } from "../../../../utils/style";

import MuliplyIcon from "../../../../assets/simulate/multiply.svg";
import DivideIcon from "../../../../assets/simulate/divide.svg";
import SubtractIcon from "../../../../assets/simulate/subtract.svg";
import EqualIcon from "../../../../assets/simulate/equal.svg";

type Operation = "multiply" | "divide" | "subtract" | "equal";

export const OperationIcon = ({ operation }: { operation: Operation }) => {
  let src;
  if (operation == "multiply") src = MuliplyIcon;
  else if (operation == "divide") src = DivideIcon;
  else if (operation == "subtract") src = SubtractIcon;
  else if (operation == "equal") src = EqualIcon;

  return <OperationIconContainer src={src} />;
};

const OperationIconContainer = styled.img`
  width: ${width_size(20)};
`;
