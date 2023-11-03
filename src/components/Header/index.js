import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  NavHeader,
  NavContent,
  WebsiteLogo,
  NavLink,
  NavMenu,
  MobileNavMenu,
  NavMenuListMobile,
  NavMenuItemMobile,
  NavBarImage,
  MobileWebsiteLogo,
} from './styledComponents';
class Header extends Component {
  render() {
    return (
      <NavHeader>
        <NavContent>
          <Link to="/">
            <WebsiteLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
          </Link>
          <NavMenu>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/cart">Cart</NavLink>
            </li>
          </NavMenu>
        </NavContent>
        <MobileNavMenu>
          <Link to="/">
            <MobileWebsiteLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
          </Link>
          <NavMenuListMobile>
            <Link to="/">
              <NavMenuItemMobile>
                <NavBarImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                  alt="nav home"
                />
              </NavMenuItemMobile>
            </Link>
            <Link to="/cart">
              <NavMenuItemMobile>
                <NavBarImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                  alt="nav cart"
                />
              </NavMenuItemMobile>
            </Link>
          </NavMenuListMobile>
        </MobileNavMenu>
      </NavHeader>
    );
  }
}

export default Header;
