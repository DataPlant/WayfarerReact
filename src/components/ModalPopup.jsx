import React, { Component, Fragment } from 'react';  
import { Modal } from 'react-bootstrap';  
  
class ModalPopup extends Component {  
    constructor(props) {  
        super(props);  
        this.state = {  
            showModal: false  
        };  
    }  
  
    isShowModal = (status) => {  
        this.handleClose();  
        this.setState({ showModal: status });  
    }  
  
    handleClose = () => {  
        this.props.onPopupClose(false);  
    }  

  
  
    render() {  
        return (  
                <Modal show={this.props.showModalPopup} onHide={this.handleClose}  
                    size="lg"  
                    aria-labelledby="contained-modal-title-vcenter"  
                    centered  
                >  
                    <Modal.Header >  
                        <Modal.Title id="sign-in-title">  
                            {/* Log In    */}
                         </Modal.Title>  
                    </Modal.Header>  
                    <Modal.Body>  
                        <hr />  
                        <div className="signUp">  
                        <form className="signup-form" method = "POST" action="/">

<h1 className="title">welcome</h1>
    <p>
        please log in our sign up below!
    </p>
            <div className="input-field">
    <input className="input" input type = "text" id="userName" name="userName" placeholder="uername"/>
</div>

<div className="input-field">
    <input className="input" type = "password" id = "password" name = "password" placeholder="password"/>
</div>

<div className="action">
    <input className="button" type = "submit" value = "Login"/>

    {/* // sign up button */}
    {/* <button className="button" id="btn-sign-up"><a href = "/signup"> sign up</a></button> */}

    {/* // modal close button */}
    <button type="button" className="link-button" onClick={() => this.isShowModal(true)}> Close</button>
</div>


</form>

                                {/* <button type="button" className="link-button" onClick={() => this.isShowModal(true)}> Log In </button> */}
                        </div>  
                    </Modal.Body>  
  
                </Modal >  
  
        );  
    }  
}  
  
export default (ModalPopup);  