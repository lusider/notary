import React from 'react'
import badge3 from '../imgs/badges/badge3.png'
import badge2 from '../imgs/badges/badge2.png'
import badge1 from '../imgs/badges/badge1.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'


function Badges() {
    return (
        <div className='section-badges'>
            <Container>
                <Row style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                        <Col style={{display: 'flex', flexDirection: 'col', justifyContent: 'center'}} className="px-5"><img src={badge3} style={{height: '250px', width: 'auto', margin: 'auto', padding: '5px'}} alt="Snow" /></Col>
                        <Col style={{display: 'flex', flexDirection: 'col', justifyContent: 'center'}} className="px-5"><img src={badge2} style={{height: '250px', width: 'auto', margin: 'auto', padding: '5px'}} alt="Snow" /></Col>
                        <Col style={{display: 'flex', flexDirection: 'col', justifyContent: 'center'}} className="px-5"><img src={badge1} style={{height: '250px', width: 'auto', margin: 'auto', padding: '5px'}} alt="Snow" /></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Badges