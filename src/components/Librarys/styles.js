import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
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
  border-right: 1px solid #07075e; ;
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
`;

export const ContentImg = styled.div`
  display: flex;
  justify-content: center;
`;

export const Img = styled.div`
  display: flex;
`;
