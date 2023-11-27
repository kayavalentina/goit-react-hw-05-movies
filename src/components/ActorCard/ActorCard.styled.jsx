import styled from '@emotion/styled';

export const ActorItem = styled.li`
  display: flex;
  flex-direction: column;
`;

export const ActorImg = styled.img`
  height: 300px;
  object-fit: cover;
`;

export const ActorName = styled.p`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 2px;
  text-align: center;
  margin-top: 10px;
`;

export const ActorRole = styled.p`
  font-size: 16px;
  text-align: center;
`;
