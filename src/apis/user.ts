import axios from "axios";
import { host } from ".";
import { SignupInfoProps } from "../pages/signup/utils";

export const createDepart = async (depart: string): Promise<boolean> => {
  return await axios
    .post(host + "/department", { name: depart })
    .then(() => {
      return true;
    });
};

export const getDeparts = async (): Promise<Record<string, number>> => {
  return await axios.get(host + "/departments")
    .then((res) => {
      const result = {};
      res.data.forEach((depart) => { result[depart.name] = depart.id; })
      return result as Record<string, number>;
    });
};

export const getUsers = async (): Promise<any> => {
  return await axios.get(host + "/users")
    .then((res) => {
      return res.data;
    });
};

export const createUser = async (signupInfo: SignupInfoProps): Promise<boolean> => {
  const departments = await getDeparts();
  if (!departments[signupInfo.depart]) return false;

  return await axios
    .post(host + "/user", {
      "login_id": signupInfo.email,
      "password": signupInfo.password,
      "name": signupInfo.name,
      "email": signupInfo.email,
      "role": signupInfo.depart,
      "dept_id": departments[signupInfo.depart],
      "confirm_password": signupInfo.password
    })
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
};

export const getLoginInfo = async ({ id }: { id: string }): Promise<any> => {
  return await axios.get(host + '/user/login/' + id).then((res) => {
    console.log(res.data);
    return res.data;
  }).catch(() => { return false });
};
export const login = async ({ email, password }: { email: string, password: string }): Promise<boolean> => {
  const loginInfo = new FormData();
  loginInfo.append('username', email);
  loginInfo.append('password', password);

  return await axios
    .post(host + "/login", loginInfo)
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
};