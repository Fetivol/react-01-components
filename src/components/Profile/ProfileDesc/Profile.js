import { ProfileDescription } from '../ProfileDescription/ProfileDescription';
import { ProfileStats } from '../ProfileStats/ProfileStats';
import { Wrapper } from './Profile.styled';
import PropTypes from 'prop-types';

// console.log(userData);
export const Profile = ({
  userData: { username, tag, location, avatar, stats },
}) => {
  return (
    <Wrapper>
      <ProfileDescription userInfo={{ username, tag, location, avatar }} />
      <ProfileStats userStats={stats} />
    </Wrapper>
  );
};

Profile.propTypes = {
  userData: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
