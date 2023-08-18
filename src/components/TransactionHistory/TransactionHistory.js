import { TableHeader } from './TableHeader/TableHeader';
import { TableRow } from './TableRow/TableRow';

export const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <TableHeader />
      <tbody>
        {items.map(item => {
          return <TableRow key={item.id} itemData={item} />;
        })}
      </tbody>
    </table>
  );
};
