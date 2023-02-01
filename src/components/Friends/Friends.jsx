import { FriendItem } from 'components/FriendsItem/FriendsItem';

export const Friends = ({ friends }) => {
  return (
    <>
      <h2>Friends list</h2>
      <ul>
        {friends.map(friend => (
          <li key={friend.id}>
            <FriendItem friend={friend} />
          </li>
        ))}
      </ul>
    </>
  );
};
