import styled from 'styled-components';

export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ online }) => (online ? 'limegreen' : 'orangered')};
`;
export const FriendName = styled.p`
  margin: 0;
  padding: 0;
`;
