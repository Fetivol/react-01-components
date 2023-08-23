import { Profile } from './Profile/ProfileDesc/Profile';
import userData from './Profile/user.json';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import friends from './FriendList/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import statisticData from './Statistics/data.json';

export const App = () => {
  return (
    <Layout>
      <Profile userData={userData} />
      <Statistics statisticData={statisticData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </Layout>
  );
};
