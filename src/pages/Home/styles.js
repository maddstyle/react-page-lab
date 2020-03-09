import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: flex-start;
  height: 600px;
  padding-left: 50px;
  overflow: hidden;
`;

export const Title = styled.h1`
  font-size: 48px;
  display: flex;
  color: #fff;
`;

export const Description = styled.p`
  color: #fff;
`;

export const AwesomeButton = styled.button`
  margin-top: 20px;
  height: 40px;
  width: 120px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-content: center;
  border-radius: 4px;
`;
