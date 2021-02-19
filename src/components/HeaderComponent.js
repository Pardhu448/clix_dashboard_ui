import React, { Component } from 'react'
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, UncontrolledDropdown, Dropdown, DropdownToggle, DropdownItem,DropdownMenu , Tooltip} from 'reactstrap';
import { NavLink } from 'react-router-dom';

import Link from '@material-ui/core/Link'
import { userActions } from '../redux/useractions';
import "./DropAuth.css";
import HomeIcon from '@material-ui/icons/Home'

import InsertLinkIcon from '@material-ui/icons/InsertLink';
import { connect } from 'react-redux';
import { compose } from 'redux';
const NavLinkStyle = {
  color: 'black',
};

class Header extends Component{
  constructor(props){
    super(props);
    this.state = {isNavOpen: false, Login: 'School Login',Logout: "Logout",isTooltipOpen: false, isopen:false , click: true};

    // this.props.dispatch(userActions.login());
    // this.props.dispatch(userActions.logout());
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleTooltip = this.toggleTooltip.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    
  
  }
   
  isopen (){
    this.setState({
      isopen: true
    })
  }
  isclose(){
    this.setState({
      isopen: false
    })
  }
  
  toggleData(){
     this.setState({
       isopen: !this.state.isopen
     })
   }


  toggleNav(){
   this.setState({isNavOpen: !this.state.isNavOpen});
  }
  toggleTooltip(){
    this.setState({isTooltipOpen: !this.state.isTooltipOpen});
  }  


  handleLogout = ()=> {
    this.props.dispatch(userActions.logout());

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
              <span className=''> </span>       {/* <HomeIcon fontSize="small"  title="Home"/> */}
           
              <i className="fas fa-home 2x"></i>  Home
            </NavLink>
           </NavItem>
           <UncontrolledDropdown isOpen={this.state.isopen} onMouseEnter={this.isopen.bind(this)} onMouseLeave={this.isclose.bind(this)} toggle={this.toggleData.bind(this)} onClick={(e) => e.preventDefault()}  >

              <DropdownToggle nav caret style={{color: '#000'}}  disabled={this.state.isopen}  onClick={(e) => e.preventDefault()} >
       
              <span className=''></span>  <i className="fas fa-link 2x"></i> Useful Links 
                 
              </DropdownToggle>
              <DropdownMenu right>
                
                <DropdownItem>
                <NavLink style={NavLinkStyle} className='nav-link' to='/documentation'>
              <span className=''></span>  Documentation
            </NavLink>
      
                </DropdownItem>
                <DropdownItem>
              <span className=''></span>                   <Link href="https://clix.tiss.edu/" target="_blank"> CLIx Website </Link>
  
                </DropdownItem>
                <DropdownItem>
              <span className=''></span>        <Link href="https://clixoer.tiss.edu" target="_blank"> CLIxOER</Link> 
                </DropdownItem>
             
                <DropdownItem>
              <span className=''></span>    <Link href="https://clixguidebook.tiss.edu/" target="_blank"> CLIx GuideBook</Link> 
      
                </DropdownItem>
                <DropdownItem>
              
              
              <span className=''> </span>    <Link href="https://www.tissx.tiss.edu/" target="_blank"> Teacher Platform<br/> TISSx </Link> 
            
                </DropdownItem>
                
              </DropdownMenu>
              </UncontrolledDropdown>
       
            {/* <NavLink style={NavLinkStyle} className='nav-link' to='/about'>
              <span className=''></span> About
            </NavLink>
           </NavItem> */}

	     {/*<NavItem>
            <NavLink style={NavLinkStyle} className='nav-link' to='/documentation'>
              <span className=''></span> Documentation
            </NavLink>
          </NavItem>*/}


         {/* <NavItem>
            <NavLink style={NavLinkStyle} className='nav-link' to='/faq'>
              <span className=''></span> FAQ
            </NavLink>
          </NavItem> */}
          {/* <NavItem>
            <NavLink style={NavLinkStyle} className='nav-link' to='/contact'>
              <span className=''></span> Contact
            </NavLink>
          </NavItem> */}
          {/* <NavItem>
            <NavLink style={NavLinkStyle} className='nav-link' to='/access'>
              <span className=''></span> DropDownMenuAuth
            </NavLink> 
                   
     

          </NavItem> */}
          <NavItem>
            
          {loggedIn ? 
          
              
       
          <NavLink style={NavLinkStyle} className='nav-link' to='/login'>
              <span className='' onClick={this.handleLogout}></span> 
              
              
              Logout
         
            </NavLink>
      
            :
        
            <NavLink style={NavLinkStyle} className='nav-link' to='/login'>
              <span className=''></span>   <i className="fas fa-sign-in-alt"></i>
              <span id="tooltip-data">  {this.state.Login} </span>
              <Tooltip placement="top" isOpen={this.state.isTooltipOpen} autohide={false} target="tooltip-data" toggle={this.toggleTooltip}>
        Login to update your school information.
      </Tooltip>
            </NavLink> 
          
             }
            
                     
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
