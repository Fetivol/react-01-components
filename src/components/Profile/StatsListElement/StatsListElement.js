export const StatsListElement = ({ listData: { key, value } }) => {
  //   console.log(listData);
  return (
    <li >
      <span className="label">{key}</span>
      <span className="quantity">{value}</span>
    </li>
  );
};
