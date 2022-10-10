import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS, QUERIES } from "../../constants";
import Logo from "../Logo";
import UnstyledButton from "../UnstyledButton";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DesktopNav>
        <BurgerNav>
          <UnstyledButton>
            <Icon id={"shopping-bag"}></Icon>
            <VisuallyHidden>Open cart</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton>
            <Icon id={"search"}></Icon>
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id={"menu"}></Icon>
            <VisuallyHidden>Menu</VisuallyHidden>
          </UnstyledButton>
        </BurgerNav>
        <Filler></Filler>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow: auto;

  @media ${QUERIES.tabletAndDown} {
    border-top: 4px solid ${COLORS.gray[900]};
    padding: 20px 32px;
    align-items: center;
    justify-content: space-between;
  }

  @media ${QUERIES.phoneAndDown} {
    border-top: 4px solid ${COLORS.gray[900]};
    padding: 20px 16px;
    align-items: center;
    justify-content: space-between;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(3rem, 20vw - 11.5rem, 10rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const BurgerNav = styled.div`
  display: none;
  flex: 1;

  @media ${QUERIES.tabletAndDown} {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 32px;
  }

  @media ${QUERIES.phoneAndDown} {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndDown} {
    display: revert;
  }
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
