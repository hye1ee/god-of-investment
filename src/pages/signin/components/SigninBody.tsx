import Input from "../../components/Input";
import { Wrapper } from "../../components/Wrapper";

import EmailIcon from "../../../assets/email.svg";
import PassWordIcon from "../../../assets/password.svg";

interface SigninBodyProps {
  email: string;
  setEmail: (val: string) => void;
  password: string;
  setPassword: (val: string) => void;
}

export default (props: SigninBodyProps) => {
  return (
    <Wrapper direction="column" center={true}>
      <Input
        width={440}
        height={50}
        color="whiteSmoky"
        radiusOption={{ radius: 15, position: "top" }}
        onChange={(e) => props.setEmail(e.target.value)}
        value={props.email}
        placeholder="이메일"
        borderOption={{ width: 1, color: "grayLight" }}
        padding={20}
        gap={15}
        iconOption={{ icon: EmailIcon, width: 20, height: 16 }}
        fontOption={{ size: 16, weight: "medium", color: "black" }}
      />
      <Input
        type="password"
        width={440}
        height={50}
        color="whiteSmoky"
        radiusOption={{ radius: 15, position: "bottom" }}
        onChange={(e) => props.setPassword(e.target.value)}
        value={props.password}
        placeholder="비밀번호"
        borderOption={{ width: 1, color: "grayLight" }}
        padding={20}
        gap={15}
        iconOption={{ icon: PassWordIcon, width: 18, height: 23 }}
        fontOption={{ size: 16, weight: "medium", color: "black" }}
      />
    </Wrapper>
  );
};
