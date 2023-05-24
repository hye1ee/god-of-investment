import React, { useEffect } from "react";
import { useState } from "react";
import Button from "../components/Button";
import { Wrapper } from "../components/Wrapper";
import MainHeader from "./components/MainHeader";
import { useNavigate } from "react-router-dom";
import { Overlay } from "../components/Overlay";
import { DepartModal } from "./components/DepartModal";
import { createUser, getDeparts } from "../../apis/user";
import SignupBody from "./components/SignupBody";
import { SignupInfoProps } from "./utils";
import { Alert } from "../components/Alert";

export default () => {
  const [deaprtList, setDepartList] = useState<Record<string, number>>({});
  const [modal, setModal] = useState(false);
  const [alert, setAlert] = useState(false);

  const [signupInfo, setSignupInfo] = useState<SignupInfoProps>({
    name: "",
    email: "",
    password: "",
    depart: "",
  });

  const navigate = useNavigate();
  const onSignin = () => {
    navigate("/signin");
  };

  const asyncModalWrapper = async () => {
    setDepartList(await getDeparts());
  };
  const asyncSignupWrapper = async () => {
    if (Object.values(signupInfo).filter((val) => val.length == 0).length > 0) {
      setAlert(true);
      return;
    }
    const result = await createUser(signupInfo);
    if (!result) {
      setAlert(true);
      return;
    }
    onSignin();
  };

  useEffect(() => {
    if (modal == false) asyncModalWrapper();
  }, [modal]);

  return (
    <Wrapper
      direction="column"
      center={true}
      width="full"
      height="full"
      gap={20}
    >
      {modal && (
        <Overlay onClick={() => setModal(false)}>
          <DepartModal setModal={() => setModal(false)} />
        </Overlay>
      )}
      {alert && (
        <Alert
          text="회원가입 정보가 올바르지 않습니다"
          offAlert={() => setAlert(false)}
        />
      )}

      <MainHeader />
      <SignupBody
        signupInfo={signupInfo}
        setSignupInfo={(key, val) => {
          const newSignupInfo = { ...signupInfo };
          newSignupInfo[key] = val;
          setSignupInfo(newSignupInfo);
        }}
        setModal={() => setModal(true)}
        departList={Object.keys(deaprtList)}
      />
      <Wrapper direction="column" center={true} gap={12}>
        <Button
          width={440}
          height={60}
          radius={15}
          color="purple"
          textOption={{
            text: "회원가입",
            weight: "medium",
            color: "white",
            size: 18,
          }}
          hoverOption={{
            color: "purpleSoft",
          }}
          onClick={asyncSignupWrapper}
        />
        <Button
          transparent={true}
          textOption={{
            text: "로그인하기",
            weight: "regular",
            color: "purple",
            size: 12,
          }}
          onClick={onSignin}
        />
      </Wrapper>
    </Wrapper>
  );
};
