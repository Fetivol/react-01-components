import { ListItem, Status, Text } from './FriendListItem.styled';
import PropTypes from 'prop-types';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <ListItem>
      <Status className="status" isOnline={isOnline}></Status>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <Text className="name">{name}</Text>
    </ListItem>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
