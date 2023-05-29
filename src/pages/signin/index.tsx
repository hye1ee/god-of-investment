import React from "react";
import { useState } from "react";
import Button from "../components/Button";
import { Wrapper } from "../components/Wrapper";
import MainHeader from "./components/MainHeader";
import SigninBody from "./components/SigninBody";
import { useNavigate } from "react-router-dom";
import { Alert } from "../components/Alert";
import { getLoginInfo, getUsers, login } from "../../apis/user";
import { useDispatch } from "react-redux";
import { updateUser } from "../../states/userSlice";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const asyncSigninWrapper = async () => {
    if (email == "" || password == "") {
      setAlert(true);
      return;
    }
    const result = await login({ email, password });
    if (!result) {
      setAlert(true);
      return;
    }
    const loginInfo = await getLoginInfo({ id: email });
    dispatch(
      updateUser({
        id: loginInfo.id,
        email: loginInfo.email,
        name: loginInfo.name,
        depart: loginInfo.dept_id,
      })
    );

    navigate("/home");
  };
  const onSignup = () => {
    navigate("/signup");
  };

  return (
    <Wrapper
      direction="column"
      center={true}
      width="full"
      height="full"
      gap={20}
    >
      {alert && (
        <Alert
          text="로그인 정보가 올바르지 않습니다"
          offAlert={() => setAlert(false)}
        />
      )}
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
          onClick={asyncSigninWrapper}
        />
        <Button
          transparent={true}
          textOption={{
            text: "회원가입하기",
            weight: "regular",
            color: "purple",
            size: 12,
          }}
          onClick={onSignup}
        />
      </Wrapper>
    </Wrapper>
  );
};
