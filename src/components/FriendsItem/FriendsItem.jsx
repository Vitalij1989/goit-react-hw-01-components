// import PropTypes from 'prop-types';
export const FriendItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <span className={isOnline}>{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </>
  );
};

// FriendItem.propTypes = {
//   friend: PropTypes.shape({
//     avatar: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     isOnline: PropTypes.bool.isRequired,
//   }).isRequired,
// };
