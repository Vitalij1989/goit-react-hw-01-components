import PropTypes from 'prop-types';
import { FriendStatus, FriendName } from './FriendItem.styled';
export const FriendItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <FriendStatus online={isOnline}>{isOnline}</FriendStatus>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </>
  );
};

FriendItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
