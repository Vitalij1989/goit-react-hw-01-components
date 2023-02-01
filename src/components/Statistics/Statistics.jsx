import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
export const Statistics = ({ stats }) => {
  return (
    <>
      <h2>Statistics section</h2>/
      <ul>
        {stats.map(stat => (
          <li key={stat.id}>
            <StatisticsItem stat={stat} />
          </li>
        ))}
      </ul>
    </>
  );
};
