import React from "react"
import logotemp from "../images/temperature-sensitive.png"
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
                <Col xl={5} className="ml-4">
                    <Jumbotron fluid className="shadow rounded customJ">
                        <Container>
                            <Row>
                                <Col xl={12} className="d-flex justify-content-center mt-n3">
                                <h1 className="text-center">Temperatures</h1>
                                <img src={logotemp} width="70" height="70" />
                                </Col>
                            </Row>
                            <Row className="mt-4" >
                               <Col xl={4} className="text-center">
                                <h2>Actual:{this.props.data.temperature}°c</h2>
                               </Col>
                               <Col xl={4} className="text-center">
                               <h2>Min:{this.props.data.temp_min}°c</h2>
                               </Col>
                               <Col xl={4} className="text-center">
                               <h2>Max:{this.props.data.temp_max}°c</h2>
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