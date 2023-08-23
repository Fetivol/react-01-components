import { ListItem, Quantity } from './StatsListElement.styled';
import PropTypes from 'prop-types';

export const StatsListElement = ({ listData: { key, value } }) => {
  return (
    <ListItem>
      <span className="label">{key}</span>
      <Quantity className="quantity">{value}</Quantity>
    </ListItem>
  );
};

StatsListElement.propTypes = {
  listData: PropTypes.shape({
    key: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  }).isRequired,
};
