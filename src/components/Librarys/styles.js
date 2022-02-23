import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-bottom: 1px solid #000;
`;

export const Column50 = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
`;

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;

export const Name = styled.div`
  display: flex;
  padding-bottom: 5px;
  font-size: 14px;
`;

export const Description = styled.div`
  display: flex;
  font-size: 14px;
  padding-bottom: 5px;
`;

export const ViewMore = styled.div`
  display: flex;
  font-size: 10px;
  justify-content: flex-end;
  padding-right: 10px;
  cursor: pointer;
`;

export const ContentImg = styled.div`
  display: flex;
  justify-content: center;
`;

export const Img = styled.div`
  display: flex;
`;
