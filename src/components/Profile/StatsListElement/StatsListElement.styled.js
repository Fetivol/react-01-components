import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  background-color: lightgrey;
  padding: 30px 15px;
  border: 2px solid #ccc;
  border-radius: 4px;
  flex-grow: 1;
  text-align: center;
  color: #5e5b5b;
`;

export const Quantity = styled.span`
  color: black;
  font-size: 20px;
  font-weight: 500;
`;
