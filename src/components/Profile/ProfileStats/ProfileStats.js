import { StatsListElement } from '../StatsListElement/StatsListElement';

export const ProfileStats = ({ userStats }) => {
  const statsEntries = Object.entries(userStats);
  return (
    <ul className="stats">
      {statsEntries.map(([key, value]) => {
        return <StatsListElement listData={{ key, value }} key={key} />;
      })}
    </ul>
  );
};

// export const ProfileStats = ({ userStats: { followers, views, likes } }) => {
//   return (
//     <ul>
//       <StatsListElement listData={followers} />
//       <StatsListElement listData={views} />
//       <StatsListElement listData={likes} />
//     </ul>
//   );
// };
