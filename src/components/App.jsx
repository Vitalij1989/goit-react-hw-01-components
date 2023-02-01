import { Profile } from './Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';

import { friends, transactions, user, statistics } from '../data/index';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile user={user} />
      <Statistics stats={statistics} />
    </div>
  );
};
