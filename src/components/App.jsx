import { Profile } from './Profile/Profile';
import userData from './Profile/user.json';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import friends from './FriendList/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile userData={userData} />
      <Statistics />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
