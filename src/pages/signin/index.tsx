import { useState } from "react";
import Button from "../components/Button";
import { Wrapper } from "../components/Wrapper";
import MainHeader from "./components/MainHeader";
import SigninBody from "./components/SigninBody";
import { useNavigate } from "react-router-dom";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const onSignin = () => {
    navigate("/home");
  };

  return (
    <Wrapper
      direction="column"
      center={true}
      width="full"
      height="full"
      gap={20}
    >
      <MainHeader />
      <SigninBody
        email={email}
        setEmail={(val) => setEmail(val)}
        password={password}
        setPassword={(val) => setPassword(val)}
      />
      <Wrapper direction="column" center={true} gap={12}>
        <Button
          width={440}
          height={60}
          radius={15}
          color="purple"
          textOption={{
            text: "로그인",
            weight: "medium",
            color: "white",
            size: 18,
          }}
          hoverOption={{
            color: "purpleSoft",
          }}
          onClick={onSignin}
        />
        <Button
          transparent={true}
          textOption={{
            text: "회원가입하기",
            weight: "regular",
            color: "purple",
            size: 12,
          }}
        />
      </Wrapper>
    </Wrapper>
  );
};
