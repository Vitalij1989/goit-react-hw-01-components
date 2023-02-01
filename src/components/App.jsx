import { Layout } from './Layout/Layout.styled';

import { Profile } from './Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { Friends } from './Friends/Friends';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import { friends, transactions, user, statistics } from '../data/index';
export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile user={user} />
      <Statistics stats={statistics} />
      <Friends friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
