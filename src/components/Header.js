import React from "react"
import logo192 from "../images/logo192.png"
import "./styles/image.css"
import "../index.css"
import Navbar from "react-bootstrap/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from "react-bootstrap/Col"

class Header extends React.Component{
    render(){
        return(
            <Col xl={3} className="d-flex">
                <img
                    alt=""
                    src={logo192}
                    width="70"
                    height="70"
                    className="d-inline-block align-top"
            />
            <h3 className="align-self-center ml-4"><b>W e a t h e r. i o</b></h3>
            </Col>
            

            
            
        )
    }
}

export default Header