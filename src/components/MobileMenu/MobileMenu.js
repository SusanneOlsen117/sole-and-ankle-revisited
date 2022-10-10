/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { COLORS } from "../../constants";

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
        <Menu>
          <MenuLink style={{ "--color": COLORS.secondary }} href="/sale">
            Sale
          </MenuLink>
          <MenuLink style={{ "--color": COLORS.gray[900] }} href="/new">
            New&nbsp;Releases
          </MenuLink>
          <MenuLink style={{ "--color": COLORS.gray[900] }} href="/men">
            Men
          </MenuLink>
          <MenuLink style={{ "--color": COLORS.gray[900] }} href="/women">
            Women
          </MenuLink>
          <MenuLink style={{ "--color": COLORS.gray[900] }} href="/kids">
            Kids
          </MenuLink>
          <MenuLink style={{ "--color": COLORS.gray[900] }} href="/collections">
            Collections
          </MenuLink>
        </Menu>
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
  background: hsla(220, 5%, 40%, 0.8);

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Content = styled(DialogContent)`
  width: 80%;
  height: 100%;
  background: white;

  display: flex;
  flex-direction: column;
  padding: 32px;
`;

const Header = styled.div`
  display: flex;
  justify-content: end;
  flex-basis: 0;
`;

const CloseButton = styled(UnstyledButton)``;

const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  margin-bottom: auto;
  gap: 22px;
`;

const MenuLink = styled.a`
  color: var(--color);
  font-size: calc(18 / 16 * 1rem);
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
}
`;

const Footer = styled.div`
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const FooterLink = styled.a`
  color: ${COLORS.gray[700]};
  font-size: calc(14 / 16 * 1rem);
  text-decoration: none;
`;

export default MobileMenu;
