import styled from 'styled-components';

export const TabRow = styled.tr`
  &:nth-child(even) {
    background-color: #e6fefa;
  }
  &:hover {
    background-color: #e0e0e0;
  }
`;
export const TabCell = styled.td`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
`;
