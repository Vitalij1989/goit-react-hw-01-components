import { FriendItem } from 'components/FriendsItem/FriendsItem';
import { FriendsTitle, FriendsList, FriendsItem } from './Friends.Styled';
export const Friends = ({ friends }) => {
  return (
    <>
      <FriendsTitle>Friends list</FriendsTitle>
      <FriendsList>
        {friends.map(friend => (
          <FriendsItem key={friend.id}>
            <FriendItem friend={friend} />
          </FriendsItem>
        ))}
      </FriendsList>
    </>
  );
};
