import styled from 'styled-components';

export const StatisticsContainer = styled.section`
  margin: 0 auto;
  width: 542px;
  background-color: #fff;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 0 0 4px 4px;
`;

export const StatisticsTitle = styled.h2`
  padding: 30px;
  color: grey;
  text-align: center;
  text-transform: uppercase;
`;

export const StatisticsList = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
`;

export const StatisticsListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  row-gap: 5px;
  padding: 10px;
  background-color: ${function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`.padEnd(
      7,
      '0'
    );
  }};
`;
