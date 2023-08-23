import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 2px solid lightgray;
  border-radius: 4px;
  background-color: lightblue;
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
  margin-bottom: 10px;
  border-radius: 50%;
  background-color: white;
`;

export const Name = styled.p`
  margin-bottom: 10px;
  text-align: center;
  color: black;
  font-size: 20px;
  font-weight: 500;
`;

export const Text = styled.p`
  margin-bottom: 5px;
  text-align: center;
  color: #5e5b5b;
  font-size: 15px;
`;
