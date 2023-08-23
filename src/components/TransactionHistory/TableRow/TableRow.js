import { TabRow, TabCell } from './TableRow.styled';
import PropTypes from 'prop-types';

export const TableRow = ({ itemData: { type, amount, currency } }) => {
  return (
    <TabRow>
      <TabCell>{type}</TabCell>
      <TabCell>{amount}</TabCell>
      <TabCell>{currency}</TabCell>
    </TabRow>
  );
};

TableRow.propTypes = {
  itemData: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
