import { createGlobalStyle } from "styled-components";
import background from "../assets/images/react-logo.svg";
export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline:0;
  box-sizing: border-box;
}

body{
  background: #1f2435 url(${background}) center top;
  color: #fff;
}
`;
