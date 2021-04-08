import styled, {css} from "styled-components";
import {Link as RouterLink} from "@reach/router";
import {fadeIn} from "../styles/animations"

export const Nav = styled.nav`
  align-items: center;
  background: #ffffff;
  border-top: 1px solid #e0e0e0;
  bottom: 0;
  display: flex;
  height: 50px;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 500px;
  position: fixed;
  width: 100%;
  z-index: 1000;
`

export const NavButton = styled.button`
  color: #ccc;
`

export const Link = styled(RouterLink)`
  align-items: center;
  color: #e0e0e0;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;

  // resultar elemento activo
  &[aria-current] {
    color: #000;

    &:after {
      ${fadeIn({time: '0.5s'})};
      content: '-';
      position: absolute;
      bottom: 0;
      font-size: 34px;
      line-height: 20px;
    }
  }
`
