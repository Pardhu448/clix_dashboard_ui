import React, { Component } from 'react'
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, UncontrolledDropdown, Dropdown, DropdownToggle, DropdownItem,DropdownMenu , Tooltip} from 'reactstrap';
import { NavLink,withRouter } from 'react-router-dom';

import Link from '@material-ui/core/Link'
import { userActions } from '../redux/useractions';
import "./DropAuth.css";
import HomeIcon from '@material-ui/icons/Home'

import InsertLinkIcon from '@material-ui/icons/InsertLink';

import { connect } from 'react-redux';
import { compose } from 'redux';
import clixlogoimage from '../shared/Clix_logo.png'

const NavLinkStyle = {
  color: 'black',

};
const LInkStyle = {
     
}

class Header extends Component{
  constructor(props){
    super(props);
    this.state = {isNavOpen: false, Login: 'School Login',Logout: "Logout",isTooltipOpen: false,isprofile:false, isopen:false , click: true};

    // this.props.dispatch(userActions.login());
    // this.props.dispatch(userActions.logout());
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleTooltip = this.toggleTooltip.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    
  
  }
   isprofile(){
     this.setState({
       isprofile: true
     })
   }
   toggleLogout(){
     this.setState({
      isprofile: !this.state.isprofile
     })
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
    const isActive = (path, match, location) => !!(match || path === location.pathname);

    const { loggingIn, loggedIn, loginFailed } = this.props;
    
     return(
       <>
       <Navbar  color="light" light expand='md'>
       
       <NavbarBrand className="mr-auto" href="/">
        <img
          alt="CLIx Logo"
          src={clixlogoimage}
          width="150"
          height="40"
          
          className="d-inline-block align-bottom img-fluid"
        />
        {''}
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleNav}/>

 
        <Collapse isOpen={this.state.isNavOpen} navbar>
        <Nav className="ml-auto" navbar>

           <NavItem >
            <NavLink style={NavLinkStyle} activeClassName="active" exact  className='nav-link' active="true" rel="noopener" to='/home'>
              <span className=''> </span>       {/* <HomeIcon fontSize="small"  title="Home"/> */}
           
              <i className="fa fa-home 2x"></i>  Home
            </NavLink>
           </NavItem>
           <NavItem>
           <UncontrolledDropdown isOpen={this.state.isopen} onMouseEnter={this.isopen.bind(this)} onMouseLeave={this.isclose.bind(this)} toggle={this.toggleData.bind(this)}   >

              <DropdownToggle nav caret style={{color: '#000'}}  disabled={this.state.isopen}  onClick={(e) => e.preventDefault()} >
       
              <span className=''></span>  <i className="fa fa-link 2x"></i> Useful Links 
                 
              </DropdownToggle>
              <DropdownMenu right>
                
                <DropdownItem href='/documentation' target="_blank" >
               
              <span className=''></span>  Documentation
      
                </DropdownItem>
                <DropdownItem  href="https://clix.tiss.edu/" rel="noreferrer"  target="_blank">
           CLIx Website <i className="fa fa-external-link 2x"></i> 
  
                </DropdownItem>
                <DropdownItem href="https://clixoer.tiss.edu" rel="noreferrer" target="_blank">
          CLIxOER <i className="fa fa-external-link 2x"></i>  
                </DropdownItem>
             
                <DropdownItem   href="https://clixguidebook.tiss.edu/" rel="noreferrer" target="_blank">
      CLIx GuideBook  <i className="fa fa-external-link 2x"> </i> 
      
                </DropdownItem>
                <DropdownItem  href="https://www.tissx.tiss.edu/" rel="noreferrer" target="_blank">
              
              
   Teacher Platform <br/> TISSx <i className="fa fa-external-link 2x"></i> 
            
                </DropdownItem>
                
              </DropdownMenu>
              </UncontrolledDropdown>
              </NavItem>
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
          
              
       
          <Dropdown isOpen={this.state.isprofile} toggle={this.toggleLogout.bind(this)}>
          <DropdownToggle caret nav style={{color: '#000', 
}} >
           <i className="fa fa-user-circle-o"></i>
          </DropdownToggle>
          <DropdownMenu style={{ transform: 'translate3d(-35px, 36px, 0px)'}}>
          <DropdownItem className="nav-link">
            <NavLink to="/schoolviz">          My Dashboard </NavLink>
            
            
            </DropdownItem>

            <DropdownItem  >
              
            <NavLink style={NavLinkStyle} className='nav-link' to='/login'>
             <span className='' onClick={this.handleLogout}></span> 
              
              
               Logout
         
             </NavLink>
              </DropdownItem>
            {/* <DropdownItem >Dashboard</DropdownItem> */}
          
          </DropdownMenu>
        </Dropdown>

          // <NavLink style={NavLinkStyle} className='nav-link' to='/login'>
          //     <span className='' onClick={this.handleLogout}></span> 
              
              
          //     Logout
         
          //   </NavLink>
      
            :
            <NavLink style={NavLinkStyle} exact className='nav-link'  activeClassName="active" to='/login'>
              <span className=''></span>   <i className="fa fa-sign-in"></i>
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
export default withRouter(compose(connect(mapStateToProps))(Header));
