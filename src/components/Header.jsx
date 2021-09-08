import { Link } from 'react-router-dom'
import ModalPopup from './ModalPopup';  
import React, { Fragment } from 'react'



class Header extends React.Component {

  state = {
    categoryIdx: 0,
    showModalPopup: false  
    
  }

  isShowPopup = (status) => {  
    this.setState({ showModalPopup: status });  
  };  

  render() {    
    
      return (
        <header className="header">
          <h1 className="header-title">Wayfarer</h1>
    
          <nav>
            <ul className="navList">
              <li>
                <Link className="navLink" to="/">Home</Link>
              </li>
              <li>
                <Link className="navLink" to="/cities">Cities</Link>
              </li>
              <li>
              <Link className="navLink" to="/explore">Explore</Link>
            </li>
  
            <li  
              className="navLink"  
              onClick={() => this.isShowPopup(true)}>  
              <button className="button"> Log In</button>  
            </li>  
        <ModalPopup  
          showModalPopup={this.state.showModalPopup}  
          onPopupClose={this.isShowPopup}  
        ></ModalPopup>  
          </ul>
        </nav>
        
      </header>
      );
    }
}
  
  export default Header;
  