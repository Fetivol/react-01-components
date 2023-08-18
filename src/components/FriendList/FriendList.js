import { FriendListItem } from './FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => {
        return <FriendListItem friend={friend} key={friend.id} />;
      })}
    </ul>
  );
};
