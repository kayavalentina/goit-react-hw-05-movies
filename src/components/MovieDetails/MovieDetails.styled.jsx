import styled from 'styled-components';

export const MovieWrapper = styled.div`
  display: flex;
`;

export const InfoWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const ReleaseStatus = styled.p`
  font-size: 20px;
  letter-spacing: 1px;
  margin-bottom: 5px;
`;

export const MovieRelease = styled.p`
  font-size: 20px;
  letter-spacing: 1px;
  margin-bottom: 5px;
`;

export const MovieRating = styled.p`
  font-size: 20px;
  letter-spacing: 1px;
  margin-bottom: 5px;
`;

export const VoteNum = styled.span`
  font-size: 20px;
  letter-spacing: 1px;
  margin-bottom: 5px;
  font-weight: 600;
`;

export const GenresName = styled.p`
  font-size: 20px;
  letter-spacing: 1px;
  margin-bottom: 5px;
`;

export const GenresList = styled.ul`
  margin-bottom: 5px;
`;

export const GenresItem = styled.li`
  font-size: 20px;
  letter-spacing: 1px;
  margin-left: 15px;
`;

export const MovieOverview = styled.p`
  font-size: 18px;
  margin-top: 30px;
`;

export const MovieHomepage = styled.a`
  font-size: 20px;
  letter-spacing: 1px;
  margin-top: 30px;
  color: #0077ee;

  &:hover {
    color: #1e90ff;
  }
`;
