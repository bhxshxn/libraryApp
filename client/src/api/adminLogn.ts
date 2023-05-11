import axios from "axios";

export interface loginProps {
  username: String;
  password: String;
}
export const adminLogin = async (props: loginProps) => {
  const data = await axios.post(`http://localhost:3100/admin/login`, {
    username: props.username,
    password: props.password,
  });
  return data.data;
};
