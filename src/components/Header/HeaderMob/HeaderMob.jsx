import React from 'react';

import foto from '../../../images/user.png';
import sprite from '../../../images/sprite.svg';

import { RiUserLine, RiCoinLine } from 'react-icons/ri';

import {
  Icons,
  IconsWrap,
  LinkWrapper,
  Logo,
  LogoWrap,
  StyledHeader,
  StyledLogo,
  StyledNavLink,
  UserWrap,
  Version,
} from './HeaderMob.styled';

const HeaderMob = () => {
  return (
    <StyledHeader>
      <LogoWrap>
        <StyledLogo className="logoFlex" to="/">
          <Logo>
            <use href={sprite + '#icon-setting-1'} />
          </Logo>
          <p>Dashboard</p>
          <Version>v.01</Version>
        </StyledLogo>

        <StyledNavLink className="help" to="/help">
          <Icons>
            <use href={sprite + '#icon-message-question-1'} />
          </Icons>
        </StyledNavLink>
      </LogoWrap>

      <nav>
        <LinkWrapper>
          <StyledNavLink to="/product">
            <Icons>
              <use href={sprite + '#icon-d-square-1'} />
            </Icons>
          </StyledNavLink>
        </LinkWrapper>

        <LinkWrapper>
          <StyledNavLink to="/customers">
            <IconsWrap className="border fill">
              <RiUserLine />
            </IconsWrap>
          </StyledNavLink>
        </LinkWrapper>

        <LinkWrapper>
          <StyledNavLink to="/income">
            <IconsWrap className="border fill ">
              <RiCoinLine />
            </IconsWrap>
          </StyledNavLink>
        </LinkWrapper>

        <LinkWrapper>
          <StyledNavLink to="/promote">
            <Icons>
              <use href={sprite + '#icon-discount-shape-1'} />
            </Icons>
          </StyledNavLink>
        </LinkWrapper>
      </nav>
      <UserWrap>
        <img src={foto} alt="Users foto" />
      </UserWrap>
    </StyledHeader>
  );
};

export default HeaderMob;
