import {
  StatisticsContainer,
  StatisticsTitle,
  StatisticsListItem,
  StatisticsList,
} from './Statistics.styled';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
export const Statistics = ({ title, stats }) => {
  return (
    <>
      <StatisticsContainer>
        <StatisticsTitle>{title}</StatisticsTitle>
        <StatisticsList>
          {stats.map(stat => (
            <StatisticsListItem key={stat.id}>
              <StatisticsItem stat={stat} />
            </StatisticsListItem>
          ))}
        </StatisticsList>
      </StatisticsContainer>
    </>
  );
};
