import { StatList } from './StatList/StatList';
import statisticData from './data.json';

export const Statistics = () => {
  return (
    <section className="statistic">
      <h2 className="title">Upload stats</h2>
      <StatList statisticData={statisticData} />
    </section>
  );
};
