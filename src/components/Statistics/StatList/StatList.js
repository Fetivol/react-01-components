import { StatListElem } from '../StatListElem/StatListElem';

export const StatList = ({ statisticData }) => {
  //   console.log(statisticData);
  return (
    <ul>
      {statisticData.map(data => {
        return <StatListElem data={data} key={data.id} />;
      })}
    </ul>
  );
};
