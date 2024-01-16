import React from 'react';
import {
  Icons,
  IconsWrap,
  LinkWrapper,
  Logo,
  StyledHeader,
  StyledLogo,
  StyledNavLink,
  UserDesc,
  UserWrap,
  Version,
} from './HeaderDesc.styled';
import foto from '../../../images/user.png';
import sprite from '../../../images/sprite.svg';
import { PiKeyBold } from 'react-icons/pi';
import { IoChevronForwardSharp } from 'react-icons/io5';
import { RiUserLine, RiCoinLine } from 'react-icons/ri';
import users from '../../../assets/users.json';

const HeaderDesc = () => {
  const user = users[0];
  return (
    <StyledHeader>
      <StyledLogo to="/">
        <Logo>
          <use href={sprite + '#icon-setting-1'} />
        </Logo>
        <p>
          Dashboard <Version>v.01</Version>
        </p>
      </StyledLogo>
      <nav>
        <LinkWrapper>
          <StyledNavLink to="/">
            <IconsWrap className="border fill">
              <PiKeyBold />
            </IconsWrap>
            <span>Dashbord</span>
          </StyledNavLink>
        </LinkWrapper>
        <LinkWrapper>
          <StyledNavLink to="/product">
            <Icons>
              <use href={sprite + '#icon-d-square-1'} />
            </Icons>
            <span>Product</span>
            <IconsWrap className="stroke posistion">
              <IoChevronForwardSharp />
            </IconsWrap>
          </StyledNavLink>
        </LinkWrapper>

        <LinkWrapper>
          <StyledNavLink to="/customers">
            <IconsWrap className="border fill">
              <RiUserLine />
            </IconsWrap>
            <span>Customers</span>
            <IconsWrap className="stroke posistion">
              <IoChevronForwardSharp />
            </IconsWrap>
          </StyledNavLink>
        </LinkWrapper>

        <LinkWrapper>
          <StyledNavLink to="/income">
            <IconsWrap className="border fill ">
              <RiCoinLine />
            </IconsWrap>
            <span>Income</span>
            <IconsWrap className="stroke posistion">
              <IoChevronForwardSharp />
            </IconsWrap>
          </StyledNavLink>
        </LinkWrapper>

        <LinkWrapper>
          <StyledNavLink to="/promote">
            <Icons>
              <use href={sprite + '#icon-discount-shape-1'} />
            </Icons>
            <span>Promote</span>
            <IconsWrap className="stroke posistion">
              <IoChevronForwardSharp />
            </IconsWrap>
          </StyledNavLink>
        </LinkWrapper>

        <LinkWrapper>
          <StyledNavLink to="/help">
            <Icons>
              <use href={sprite + '#icon-message-question-1'} />
            </Icons>
            <span>Help</span>
            <IconsWrap className="stroke posistion">
              <IoChevronForwardSharp />
            </IconsWrap>
          </StyledNavLink>
        </LinkWrapper>
      </nav>
      <UserWrap>
        <img src={foto} alt="Users foto" />
        <UserDesc>
          <p>{user.name}</p>
          <p className="description">{user.position}</p>
        </UserDesc>
      </UserWrap>
      <p className="greet">Hello {user.name}👋🏼,</p>
    </StyledHeader>
  );
};

export default HeaderDesc;
