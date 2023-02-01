import styled from 'styled-components';

export const ListProfile = styled.div`
  max-width: 542px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 0 0 4px 4px;
`;

export const ProfileDescr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 15px;
  margin: 0;
`;
export const ProfileImg = styled.img`
  width: 50%;
  height: auto;
  border-radius: 50%;
  background-color: lightgrey;
`;
export const ProfileText = styled.p`
  font-size: 34px;
  color: grey;
  margin: 0;
`;
export const ProfileStats = styled.ul`
  display: flex;
  justify-content: center;
  background-color: ghostwhite;
  border-top: 1px solid lightgrey;
  margin: 0;
  font-size: 24px;
  line-height: 30px;
`;
export const ProfileStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  row-gap: 5px;
  padding: 20px;
  margin: 0;
  :not(:last-child) {
    border-right: 1px solid lightgrey;
  }
`;

export const ProfileStatsLabel = styled.span`
  color: grey;
`;

export const ProfileStatsQuantity = styled.span`
  font-weight: 500;
`;
