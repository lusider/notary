import React from 'react'
import dallas from '../imgs/dallas.svg'
import ftworth from '../imgs/ftworth.svg'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
function City() {
    return (
        <Container className="section-city">
            <Row style={{justifyContent: 'center'}}><h2>Serving the Dallas/Fort Worth Metroplex</h2></Row>
            <Row>
                <Col className="p-5" style={{display: 'flex', flexDirection: 'col', justifyContent: 'center'}}>
                <img style={{height: '230px', width: 'auto'}} src={dallas} alt="dallas-large"/>
                </Col>
                <Col className="p-5" style={{display: 'flex', flexDirection: 'col', justifyContent: 'center'}}>
                <img style={{height: '230px', width: 'auto'}} src={ftworth} alt="ftworth-large" />
                </Col>
                
            </Row>
            <Row>
                <Col />
                <div style={{padding: '20px'}}>
                <Col className="pt-2 pb-5">

                    <Row style={{justifyContent: 'center'}}>
                    <Card style={{ width: '100%', height: 'auto', padding: '30px 40px', border: "none", backgroundColor: "#153555", borderRadius: '40px' }}>
                    <Row style={{justifyContent: 'center'}}><h3 style={{ color: "#fff", marginTop: '10px', padding: '0 30px'}}>Including Below Counties</h3></Row>
                    <Row className="p5" style={{justifyContent: 'center'}}>
                    <Col md={4} style={{padding: '5px'}}>
                    <ListGroup style={{width: '100%'}}>
                        
                        <ListGroup.Item style={{marginBottom: '5px', border: 'none', textAlign: 'center', padding: '10px', backgroundColor: "#153555", color: "#fff", fontSize: '20px', fontFamily: 'Abhaya Libre'}}>Collin</ListGroup.Item>
                        <ListGroup.Item style={{marginBottom: '5px', border: 'none', textAlign: 'center', padding: '10px', backgroundColor: "#153555", color: "#fff", fontSize: '20px', fontFamily: 'Abhaya Libre'}}>Denton</ListGroup.Item>

                    </ListGroup>
                    </Col>
                    <Col md={4} style={{padding: '5px'}}>
                    <ListGroup>
                        <ListGroup.Item style={{marginBottom: '5px', border: 'none', textAlign: 'center', padding: '10px', backgroundColor: "#153555", color: "#fff", fontSize: '20px', fontFamily: 'Abhaya Libre'}}>Cooke</ListGroup.Item>
                        <ListGroup.Item style={{marginBottom: '5px', border: 'none', textAlign: 'center', padding: '10px', backgroundColor: "#153555", color: "#fff", fontSize: '20px', fontFamily: 'Abhaya Libre'}}>Grayson</ListGroup.Item>
                        <ListGroup.Item style={{marginBottom: '5px', border: 'none', textAlign: 'center', padding: '10px', backgroundColor: "#153555", color: "#fff", fontSize: '20px', fontFamily: 'Abhaya Libre'}}>Hunt</ListGroup.Item>
                    </ListGroup>
                    </Col>
                    <Col md={4} style={{padding: '5px'}}>
                    <ListGroup>
                        <ListGroup.Item style={{marginBottom: '5px', border: 'none', textAlign: 'center', padding: '10px', backgroundColor: "#153555", color: "#fff", fontSize: '20px', fontFamily: 'Abhaya Libre'}}>Dallas</ListGroup.Item>

                        <ListGroup.Item style={{marginBottom: '5px', border: 'none', textAlign: 'center', padding: '10px', backgroundColor: "#153555", color: "#fff", fontSize: '20px', fontFamily: 'Abhaya Libre'}}>Tarrant</ListGroup.Item>

                    </ListGroup>
                    </Col>
                    </Row>
                    </Card>
                    </Row>
                </Col>
                </div>
                <Col />

            </Row>
        </Container>
            
    )
}

export default City
