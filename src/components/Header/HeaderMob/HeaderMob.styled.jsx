import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  max-width: 335px;
  display: flex;
  flex-direction: column;

  gap: 20px;
  margin: 0 auto;
  padding: 15px;
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  font-size: 10px;
  text-align: center;
  border-bottom: ${({ theme }) => theme.borders.table};
  color: ${({ theme }) => theme.colors.main};
  background-color: ${({ theme }) => theme.colors.hover};

  > nav {
    display: flex;
    justify-content: space-between;
    gap: 25px;
  }
  @media screen and (min-width: 768px) {
    max-width: 100%;
    width: 768px;
    flex-direction: row;
    padding: 20px;
  }
`;
export const LogoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 14px;
`;
export const StyledLogo = styled(Link)`
  width: 100%;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &.logoFlex {
    display: flex;
    align-items: center;
    gap: 4px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.main};
  }
`;
export const Logo = styled.svg`
  width: 50px;
  height: 50px;
  margin-right: 8px;
  fill: ${({ theme }) => theme.colors.text};
`;
export const Version = styled.p`
  font-size: 8px;
  font-weight: 500;

  color: ${({ theme }) => theme.colors.accent};
`;

export const Icons = styled.svg`
  width: 50px;
  height: 50px;
`;
export const LinkWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 7px;
`;
export const IconsWrap = styled.div`
  width: 48px;
  height: 46px;

  display: flex;
  align-items: center;
  justify-content: center;

  &.border {
    border: 4px solid ${({ theme }) => theme.colors.text};
    border-radius: 17px;
  }

  > svg {
    width: 36px;
    height: 36px;

    stroke: currentColor;
    fill: inherit;
  }

  &.fill {
    fill: ${({ theme }) => theme.colors.text};
  }
  &.stroke {
    stroke: ${({ theme }) => theme.colors.text};
    width: 50px;
    height: 50px;
  }
  &.posistion {
    margin-left: auto;
  }
`;
export const StyledNavLink = styled(NavLink)`
  width: 100%;
  display: flex;
  align-items: center;

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

  &.help {
    width: 50px;
    height: 50px;
  }
`;

export const UserWrap = styled.div`
  height: 50px;
  position: absolute;
  left: 60%;
  display: flex;
  gap: 12px;
  padding: 5px;

  > img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 20px;
    left: 210px;

    background-color: inherit;
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
