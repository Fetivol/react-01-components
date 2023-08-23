import { Profile } from './Profile/ProfileDesc/Profile';
import userData from 'data/user.json';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import friends from 'data/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from 'data/transactions.json';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import statisticData from 'data/data.json';

export const App = () => {
  return (
    <Layout>
      <Profile userData={userData} />
      <Statistics title="Upload stats" statisticData={statisticData} />
      <Statistics statisticData={statisticData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </Layout>
  );
};
