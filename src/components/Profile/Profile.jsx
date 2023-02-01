import {
  ListProfile,
  ProfileImg,
  ProfileDescr,
  ProfileText,
  ProfileStats,
  ProfileStatsItem,
  ProfileStatsLabel,
  ProfileStatsQuantity,
} from './Profile.styled';

export const Profile = ({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <>
      <ListProfile>
        <ProfileDescr>
          <ProfileImg src={avatar} alt={username} className="avatar" />
          <p className="name">{username}</p>
          <ProfileText>@{tag}</ProfileText>
          <ProfileText>{location}</ProfileText>
        </ProfileDescr>

        <ProfileStats>
          <ProfileStatsItem>
            <ProfileStatsLabel>Followers</ProfileStatsLabel>
            <ProfileStatsQuantity>{followers}</ProfileStatsQuantity>
          </ProfileStatsItem>
          <ProfileStatsItem>
            <ProfileStatsLabel>Views</ProfileStatsLabel>
            <ProfileStatsQuantity>{views}</ProfileStatsQuantity>
          </ProfileStatsItem>
          <ProfileStatsItem>
            <ProfileStatsLabel>Likes</ProfileStatsLabel>
            <ProfileStatsQuantity>{likes}</ProfileStatsQuantity>
          </ProfileStatsItem>
        </ProfileStats>
      </ListProfile>
    </>
  );
};
