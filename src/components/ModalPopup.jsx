import React, { Component, Fragment } from 'react';  
import { Modal } from 'react-bootstrap';  
import styled from "styled-components";

  

const Form = styled.form `
background-size:cover;
background-color:#121212;
color:white;
`

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
                <Modal 
                className="Modal" show={this.props.showModalPopup} onHide={this.handleClose}  
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
                        <div className="signup-form-wrapper">  
                        <Form className="signup-form" method = "POST" action="/">
<br></br>
                    <h1 className="title">sign in</h1>
                        <p>
                            please log in or sign up below!
                        </p>
                        <br></br><center></center>

                                <div className="input-field">
                        <input className="input" input type = "text" id="userName" name="userName" placeholder="uername"/>
                    </div>
                    <br></br>
                    <div className="input-field">
                        <input className="input" type = "password" id = "password" name = "password" placeholder="password"/>
                    </div>

                    <div className="action">
                        {/* <input className="button" type = "submit" value = "Login"/> */}
                            <br></br><center></center>
                        <button type="button" className="button-sign" onClick={() => this.isShowModal(true)}> Sign Up </button>
                    </div>

                    </Form>
                        </div>  
                    </Modal.Body>  
  
                </Modal >  
  
        );  
    }  
}  
  
export default (ModalPopup);  