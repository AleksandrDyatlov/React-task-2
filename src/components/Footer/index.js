import './style.scss';
import footerLogo from '../../assets/images/logo.svg';
import { NavList, NavItem } from '../Nav';
import {
  FooterColsHolder,
  FooterCol,
  FooterInfo,
  FooterTitle,
} from './FooterContent';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <FooterInfo logoUrl={footerLogo} />
          <FooterColsHolder>
            <FooterCol>
              <FooterTitle>Top Category</FooterTitle>
              <NavList>
                <NavItem>Item</NavItem>
                <NavItem>Item</NavItem>
                <NavItem>Item</NavItem>
                <NavItem>Item</NavItem>
              </NavList>
            </FooterCol>
            <FooterCol>
              <FooterTitle>Top Tag</FooterTitle>
              <NavList>
                <NavItem>Item</NavItem>
                <NavItem>Item</NavItem>
                <NavItem>Item</NavItem>
                <NavItem>Item</NavItem>
              </NavList>
            </FooterCol>
            <FooterCol>
              <FooterTitle>Menu</FooterTitle>
              <NavList>
                <NavItem>Item</NavItem>
                <NavItem>Item</NavItem>
                <NavItem>Item</NavItem>
                <NavItem>Item</NavItem>
              </NavList>
            </FooterCol>
          </FooterColsHolder>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
