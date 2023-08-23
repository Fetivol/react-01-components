import { StatList } from './StatList/StatList';
import { Wrapper } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ title, statisticData }) => {
  return (
    <Wrapper className="statistic">
      {title && <h2>{title}</h2>}
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
  title: PropTypes.string,
};
