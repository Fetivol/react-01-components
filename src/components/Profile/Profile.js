import { ProfileDescription } from './ProfileDescription/ProfileDescription';
import { ProfileStats } from './ProfileStats/ProfileStats';
// import userData from './user.json';

// console.log(userData);
export const Profile = ({
  userData: { username, tag, location, avatar, stats },
}) => {
  return (
    <div>
      <ProfileDescription userInfo={{ username, tag, location, avatar }} />
      <ProfileStats userStats={stats} />
    </div>
  );
};
