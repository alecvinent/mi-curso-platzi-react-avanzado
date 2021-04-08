import React from "react";
import {Nav, NavButton, Link} from "./styles";
import {MdHome, MdFavoriteBorder, MdPersonOutline} from "react-icons/md";
import routes from "../../shared/routes";

const ICON_SIZE = '25px';
export const NavBar =()=> {
  return(
    <Nav>
      <Link to={routes.home}><MdHome size={ICON_SIZE} /></Link>
      <Link to={routes.favorites}><MdFavoriteBorder size={ICON_SIZE} /></Link>
      <Link to={routes.users}><MdPersonOutline size={ICON_SIZE} /></Link>
    </Nav>
  );
};
