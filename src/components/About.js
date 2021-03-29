import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import sarah from '../imgs/sarah.png'
function About() {
    return (
        <section className="section-steps" id="about">
            <Container>
                <Row>
                    <Col className="px-5 mb-3" style={{display: "flex", flexDirection: "col", justifyContent: "center"}}>
                        <img src={sarah} alt="Sarah Bradshaw"  width={250} height={250} style={{ borderRadius: '100%'}}/>
                    </Col>
                    <Col className="px-5">
                        <h2 style={{fontSize: '170%', color: '#fff'}}> About Me</h2>       
                        <p style={{color: '#fff', paddingTop: '10px', paddingRight: '15px', fontSize: '110%'}}>
                            I’m a bonded, independent Notary and Loan Signing Agent that specializes in real estate closing transactions; 
                            refinance, purchase, seller, and reverse mortgages. I pride myself on being extremely thorough and customer focused. 
                            My wide range of experience makes me the perfect fit for executing efficient and smooth signings, while providing
                            great service. My business hours are flexible, and I’m available for early mornings, evenings, weekends, and holidays.
                        </p>
                    </Col>
                </Row>
            </Container>
            
        </section>
    )
}

export default About
