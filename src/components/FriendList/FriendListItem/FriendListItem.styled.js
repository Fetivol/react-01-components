import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 5px 10px;
  border: 2px solid lightgray;
`;

export const Status = styled.span`
  height: 8px;
  width: 8px;
  background-color: ${props => (props.$status ? 'green' : 'blue')};
  border-radius: 50%;
  display: inline-block;
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: black;
`;
