/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Menu dialog">
        <Header>
          <CloseButton onClick={onDismiss}>
            <VisuallyHidden>Close modal</VisuallyHidden>
            <Icon id={"close"}></Icon>
          </CloseButton>
        </Header>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: var(--color-gray-700-08);

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Content = styled(DialogContent)`
  width: 300px;
  height: 100%;
  background: var(--color-white);

  display: flex;
  flex-direction: column;
  padding: 32px;
`;

const Header = styled.div`
  display: flex;
  justify-content: end;
  flex-basis: 0;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  margin-bottom: auto;
  gap: 16px;
`;

const NavLink = styled.a`
  font-size: calc(18 / 16 * 1rem);
  text-decoration: none;
  text-transform: uppercase;
  color: var(--color-gray-900);
  font-weight: var(--weight-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
}
`;

const Footer = styled.div`
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const FooterLink = styled.a`
  color: var(--color-gray-700);
  font-size: calc(14 / 16 * 1rem);
  text-decoration: none;
`;

export default MobileMenu;
