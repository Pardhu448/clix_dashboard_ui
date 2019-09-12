import React, { Component } from 'react'
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const NavLinkStyle = {
  color: 'black',
};

class Header extends Component{
  constructor(props){
    super(props);
    this.state = {isNavOpen: false};
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav(){
   this.setState({isNavOpen: !this.state.isNavOpen});
  }

  render(){
     return(
       <>
       <Navbar bg="light" variant="light" expand='md'>
        <div className='container'>

        <NavbarToggler onClick={this.toggleNav}/>

        <NavbarBrand className="mr-auto" href="/">
        <img
          alt="CLIx Logo"
          src="/assets/images/clix_logo.png"
          width="150"
          height="40"
          className="d-inline-block align-bottom"
        />
        {''}
        </NavbarBrand>

        <Collapse isOpen={this.state.isNavOpen} navbar>
        <Nav className="ml-auto" navbar>

           <NavItem >
            <NavLink style={NavLinkStyle} className='nav-link' to='/home'>
              <span className=''></span> Home
            </NavLink>
           </NavItem>

           <NavItem>
            <NavLink style={NavLinkStyle} className='nav-link' to='/about'>
              <span className=''></span> About
            </NavLink>
           </NavItem>

	     {/*<NavItem>
            <NavLink style={NavLinkStyle} className='nav-link' to='/documentation'>
              <span className=''></span> Documentation
            </NavLink>
          </NavItem>*/}

          <NavItem>
            <NavLink style={NavLinkStyle} className='nav-link' to='/login'>
              <span className=''></span> Logout
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink style={NavLinkStyle} className='nav-link' to='/contact'>
              <span className='fa fa-address-book fa-lg'></span> Contact
            </NavLink>
          </NavItem>

        </Nav>
        </Collapse>
        </div>
       </Navbar>
       </>
     );
  }
}

export default Header;
