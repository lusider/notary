import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

function Footer() {
    return (
        <footer>
            <Container>
            <Row style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Col md='auto'>
            <ul className="footer-nav">
                <Row>
                    <li><a href="mailto:bradshawnotary@gmail.com"><i className="bi bi-envelope-fill social-bottom"></i> BradshawNotary@gmail.com</a></li>
                </Row>
                <Row>
                    <li><a href="tel:4698404016"><i className="bi bi-telephone-fill social-bottom"></i> 469-840-4016</a></li>
                </Row>
                <Row>
                    Socials                    
                    <li><a href="https://www.facebook.com/Bradshaw-Notary-Services-107385814126203/"><i className="bi bi-facebook social-bottom"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/bradshaw-notary/"><i className="bi bi-linkedin social-bottom"></i></a></li>
                    </Row>
            </ul>
            </Col>

            
            </Row>



                <Row className="p-4" style={{flexDirection: 'row', display: 'flex', justifyContent: 'center'}}>
                <p>
                    Copyright &copy; 2021 Bradshaw Notary Services.<br/>All rights reserved.
                </p>
                </Row>

                </Container>
        </footer>
    )
}

export default Footer
