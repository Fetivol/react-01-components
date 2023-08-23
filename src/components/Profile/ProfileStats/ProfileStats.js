import { StatsListElement } from '../StatsListElement/StatsListElement';
import { List } from './ProfileStats.styled';
import PropTypes from 'prop-types';

export const ProfileStats = ({ userStats }) => {
  const statsEntries = Object.entries(userStats);
  return (
    <List className="stats">
      {statsEntries.map(([key, value]) => {
        return <StatsListElement listData={{ key, value }} key={key} />;
      })}
    </List>
  );
};

ProfileStats.propTypes = {
  userStats: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
};
