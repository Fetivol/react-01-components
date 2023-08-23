import { Image, Name, Text, Wrapper } from './ProfileDescription.styled';
import PropTypes from 'prop-types';

export const ProfileDescription = ({
  userInfo: { username, tag, location, avatar },
}) => {
  return (
    <Wrapper>
      <Image src={avatar} alt="User avatar" className="avatar" />
      <Name className="name">{username}</Name>
      <Text className="tag">@{tag}</Text>
      <Text className="location">{location}</Text>
    </Wrapper>
  );
};

ProfileDescription.propTypes = {
  userInfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};
