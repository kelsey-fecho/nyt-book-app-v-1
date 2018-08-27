import React from 'react'
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap'

function NavBar(props){
  return (
    <Navbar color='light'>
      <NavbarBrand href='/'>Book Lister</NavbarBrand>
      <Nav pills>
        <NavItem>
          <NavLink href="/fiction">Combined Fiction</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/nonfiction">Combined Non-Fiction</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  )
}

export default NavBar
