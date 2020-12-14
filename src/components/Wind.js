import React from "react"
import wind from "../images/wind.png"
import "./styles/image.css"
import "../index.css"
import "../components/styles/city.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
class Header extends React.Component{
    constructor(props){
        super(props)

    }
    
    render(){
        if(this.props.data.cityName!=""){
            return(
                <Col xl={3} className="ml-4">
                    <Jumbotron fluid className="shadow rounded customJ">
                        <Container>
                            <Row>
                                <Col xl={12} className="d-flex justify-content-center mt-n3">
                                <h1 className="text-center">Wind</h1>
                                <img className="ml-3" src={wind} width="50" height="50" />
                                </Col>
                            </Row>
                            <Row className="mt-4" >
                               <Col xl={12} className="text-center">
                                <h2>{this.props.data.wind} km/hr</h2>
                               </Col>
                            </Row>
                            
                        </Container>
                    </Jumbotron>
                    
                   
                </Col>
            )
        }
        else{
            return(
                <div>

                </div>
            )
        }
        
    }
}

export default Header