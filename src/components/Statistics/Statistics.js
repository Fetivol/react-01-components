import { StatList } from './StatList/StatList';
import { Wrapper } from './Statistics.styled';
import statisticData from './data.json';
import PropTypes from 'prop-types';

export const Statistics = () => {
  return (
    <Wrapper className="statistic">
      <h2 className="title">Upload stats</h2>
      <StatList statisticData={statisticData} />
    </Wrapper>
  );
};

Statistics.propTypes = {
  statisticData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
