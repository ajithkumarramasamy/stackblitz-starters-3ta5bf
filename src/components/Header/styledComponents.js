import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const NavHeader = styled.nav`
display: flex;
justify-content: center;
border-bottom: 1px solid rgb(243, 243, 243);
@media only screen and (max-width: 768px) {
  flex-direction: column;
  align-items: center;
}
`;

export const NavContent = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 90%;
max-width: 1110px;
padding-top: 25px;
padding-bottom: 25px;
@media only screen and (max-width: 768px) {
  display:none;
}
`;

export const WebsiteLogo = styled.img`
  width: 110px;
  @media only screen and (max-width: 768px) {
    display:none;
  }
`;

export const NavMenu = styled.ul`
display: flex;
flex-direction: row;
justify-content: flex-end;
align-self: flex-end;
flex: 1;
list-style-type: none;
margin-top: 0;
margin-bottom: 0;
@media only screen and (max-width: 768px) {
  display: none;
}
`;

export const NavLink = styled(Link)`
font-family: 'Roboto';
text-decoration: none;
margin: 10px;
font-weight: 400;
font-size: 16px;
color: #475569;
`;

export const MobileNavMenu = styled.div`
display:none;
@media only screen and (max-width: 768px) {
display: flex;
flex-direction: row;
justify-content: space-between;
width:100%;
align-items: center;
height: 70px;
background-color: #e6f6ff;
flex:1;
padding:10px;
}
`;
export const NavMenuListMobile = styled.ul`
display:flex;
list-style-type: none;
margin-top: 0px;
margin-bottom: 0px;
padding: 0px;
`;

export const NavMenuItemMobile = styled.li`
margin: 0px;
cursor: pointer;
`;

export const NavBarImage = styled.img`
width: 24px;
padding-right:5px;
`;

export const MobileWebsiteLogo = styled.img`
width: 165px;
`;
