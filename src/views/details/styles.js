import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #fff;
  margin-bottom: 30px;
  font-size: 30px;
`;

export const Titulo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #09054d;
  margin: 10px 10px;
`;
export const Description = styled.div`
  display: flex;
  color: #09054d;
  margin: 10px 10px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #b6cef4;
  font-size: 16px;
  border-radius: 8px;
  margin: 0 30px;
  padding: 5px 10px;
`;

export const Componet = styled.div`
  display: flex;
  margin: 10px 10px;
  border-top: 1px solid #000;
  padding: 15px 0;
`;

export const NameComponent = styled.div`
  display: flex;
  margin: 10px 10px;
`;

export const Close = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: bold;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    color: #84a9fa;
  }

  &:active {
    color: #fa120e;
  }
`;

export const Label = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: bold;
`;
