import { StatListElem } from '../StatListElem/StatListElem';
import { List } from '../StatList/StatList.styled';
import PropTypes from 'prop-types';

export const StatList = ({ statisticData }) => {
  console.log(statisticData);
  return (
    <List>
      {statisticData.map((data, index) => {
        return <StatListElem data={data} key={data.id} index={index} />;
      })}
    </List>
  );
};

StatList.propTypes = {
  statisticData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
