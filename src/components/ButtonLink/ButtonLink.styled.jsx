import styled from 'styled-components';
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
  font-weight: 500;
  letter-spacing: 2px;
  border-radius: 1px;
  color: #ffffff;
  background-color: #dd1818;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 0px 0 11px 1px rgb(0 0 0 / 90%);
  }

  &.active {
    box-shadow: 0px 0 11px 1px rgb(255 172 160);
  }
`;
