import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  position: relative;
  width: 306px;
  height: 100vh;
  padding-top: 36px;
  padding-left: 28px;
  color: ${({ theme }) => theme.colors.bgMain};
  background-color: ${({ theme }) => theme.colors.hover};
  > p {
    width: 100%;
    &.greet {
      position: absolute;
      top: 41px;
      left: 377px;
      font-size: 24px;
      font-weight: 500;
      line-height: 36px;
      color: ${({ theme }) => theme.colors.main};
    }
  }
`;

export const StyledLogo = styled(Link)`
  display: flex;
  margin-bottom: 53px;
  > p {
    font-size: 26px;
    font-weight: 600;
    line-height: 39px;
    margin-right: 4px;
    color: ${({ theme }) => theme.colors.main};
  }
`;
export const Logo = styled.svg`
  width: 37px;
  height: 37px;
  margin-right: 8px;
`;

export const LinkWrapper = styled.div`
  width: 250px;
  margin-bottom: 17px;
  border-radius: 7px;
`;
export const Icons = styled.svg`
  width: 25px;
  height: 25px;
`;
export const IconsWrap = styled.div`
  width: 22px;
  height: 22px;

  display: flex;
  align-items: center;
  justify-content: center;

  &.border {
    border: 2px solid ${({ theme }) => theme.colors.text};
    border-radius: 7px;
  }

  > svg {
    stroke: inherit;
    fill: inherit;
  }

  &.fill {
    fill: ${({ theme }) => theme.colors.text};
  }
  &.stroke {
    stroke: ${({ theme }) => theme.colors.text};
    width: 24px;
    height: 24px;
  }
  &.posistion {
    margin-left: auto;
  }
`;

export const Version = styled.span`
  font-size: 10px;
  font-weight: 500;
  margin-right: 6px;
  color: ${({ theme }) => theme.colors.accent};
`;
export const StyledNavLink = styled(NavLink)`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 11px 5px 11px 11px;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.text};
  border-radius: 7px;
  transition: all ${({ theme }) => theme.transition.cubic};
  &:hover,
  &:focus,
  &.active {
    background-color: ${({ theme }) => theme.backgrounds.active};
    color: ${({ theme }) => theme.colors.hover};
  }
  &:hover svg,
  &:focus svg,
  &.active svg {
    fill: white;
    stroke: white;
  }
`;
export const UserWrap = styled.div`
  position: absolute;
  bottom: 10%;
  left: 28px;
  display: flex;
  gap: 12px;

  > img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }
`;
export const UserDesc = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.main};
  > p {
    &.description {
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
      color: ${({ theme }) => theme.colors.textLight};
    }
  }
`;
