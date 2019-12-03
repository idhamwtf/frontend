import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   NavbarText
} from 'reactstrap';




const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="md" style={{color:'pink', background:'black'}}>
        <NavbarBrand  className='' style={{color:'pink',fontSize:'30px'}} href="/">APLIKASI PARKIR</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="flex-column ml-auto text-center" navbar>
            <NavItem>
             JAMNYA 
            </NavItem>
            <NavItem>
              {/* <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink> */}
              HARGA
            </NavItem>
            <NavItem style={{fontSize:'50px'}}>
               HARGANYA
            </NavItem>
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;