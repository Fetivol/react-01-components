import styled from 'styled-components';

const getBgColor = props => {
  switch (props.index) {
    case 0:
      return 'lightblue';
    case 1:
      return 'coral';
    case 2:
      return 'lightgreen';
    case 3:
      return 'yellow';
    case 4:
      return 'pink';
    default:
      return null;
  }
};

export const ListElement = styled.li`
  display: flex;

  padding-top: 10px;
  padding-bottom: 10px;
  width: 80px;
  flex-direction: column;
  background-color: ${getBgColor};
`;
