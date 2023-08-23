import { ListElement } from '../StatListElem/StatListElem.styled';
import PropTypes from 'prop-types';

export const StatListElem = ({ data: { label, percentage }, index }) => {
  return (
    <ListElement className="item" index={index}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </ListElement>
  );
};

StatListElem.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
