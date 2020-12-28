import React, { Component } from 'react'
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import { userActions } from '../redux/useractions';

import { connect } from 'react-redux';
import { compose } from 'redux';
const NavLinkStyle = {
  color: 'black',
};

class Header extends Component{
  constructor(props){
    super(props);
    this.state = {isNavOpen: false};
    this.props.dispatch(userActions.logout());
    this.props.dispatch(userActions.login());

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav(){
   this.setState({isNavOpen: !this.state.isNavOpen});
  }

  render(){
    const { loggingIn, loggedIn, loginFailed } = this.props;
    
     return(
       <>
       <Navbar  color="light" light expand='md'>
       
       <NavbarBrand className="mr-auto" href="/">
        <img
          alt="CLIx Logo"
          src="https://clixoer.tiss.edu/static/ndf/images/Clix_logo.png"
          width="150"
          height="40"
          className="d-inline-block align-bottom"
        />
        {''}
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleNav}/>


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
            <NavLink style={NavLinkStyle} className='nav-link' to='/faq'>
              <span className=''></span> FAQ
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={NavLinkStyle} className='nav-link' to='/contact'>
              <span className=''></span> Contact
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={NavLinkStyle} className='nav-link' to='/access'>
              <span className=''></span> DropDownMenuAuth
            </NavLink> 
                   
     

          </NavItem>
          <NavItem>
            
          {loggedIn ? 
          <NavLink style={NavLinkStyle} className='nav-link' to='/login'>
              <span className=''></span> Logout
            </NavLink>
            :
            <NavLink style={NavLinkStyle} className='nav-link' to='/login'>
              <span className=''></span> Login
            </NavLink>  }
                     
          </NavItem>
        </Nav>
        </Collapse>
      
       </Navbar>
       </>
     );
  }
}

function mapStateToProps(state){
  const { loggingIn, loggedIn, loginFailed } = state.authenticate;
  const { view_mode , user  } = state.authmode;
  return {
      loggingIn,
      loggedIn,
      loginFailed,
      view_mode,user
  };
}
export default compose(connect(mapStateToProps))(Header);
