import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const ButtonWrapper = styled.div`
  display: inline-block;
`;

export const NavButton = styled(NavLink)`
  display: inline-block;
  min-width: 95px;
  padding: 4px 8px;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 2px;
  border-radius: 1px;
  color: #f9f5f5;
  background-color: #4e31d2;
  transition: all cubic-bezier(0.39, 0.575, 0.565, 1);

  &:hover {
    box-shadow: 0px 0 11px 1px rgb(0 0 0 / 90%);
  }

  &.active {
    box-shadow: 0px 0 11px 1px rgb(255 172 160);
  }
`;
