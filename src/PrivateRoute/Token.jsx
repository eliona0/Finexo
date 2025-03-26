import { jwtDecode } from "jwt-decode";
const Token = () => {
  const token = localStorage.getItem('token');
  if (token) {
    const userData = jwtDecode(token);
    const data = {
      name: userData.name,
      email: userData.email,
      role: userData.role,
      activeToken: token
    };
    const timeNow = new Date().getTime() / 1000;
    if (userData.exp < timeNow) {
      localStorage.removeItem("token");
      return false;
    }
    return data;
  }
  return false;
}
export default Token;
