import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from '../imgs/logo.svg'


function Header() {
    return (
        <div style={{  backgroundColor: '#153555', padding: '20px', height: '100vh' }}>
            <div className="hero-img" style={{borderRadius: '40px', backgroundColor: '#153555'}}>
            <Row>
                <Col className="px-4" style={{display: 'flex', flexDirection: 'col', justifyContent: 'center'}}>
                    
                    <img src={logo} alt="logo" style={{height: '250px', width: '250px'}} />

                </Col>
                <Col style={{display: 'flex', flexDirection: 'col', justifyContent: 'center'}}>
                    <ul className="main-nav">
                        <Row>
                          <li><a href="mailto:bradshawnotary@gmail.com"><i className="bi bi-envelope-fill"></i> BradshawNotary@gmail.com</a></li>
                        </Row>
                        <Row>
                         <li><a href="tel:4698404016"><i className="bi bi-telephone-fill"></i> 469-840-4016</a></li>
                        </Row>
                        <Row><li><a href="https://www.facebook.com/Bradshaw-Notary-Services-107385814126203/">Socials<i className="bi bi-facebook"></i></a></li>
                         <li><a href="https://www.linkedin.com/in/bradshaw-notary/"><i className="bi bi-linkedin"></i></a></li></Row>
                    </ul>
                </Col>
            </Row>


            <Row className="px-4 mt-5 head">
                <Col md={{ span: 7, offset: 3 }}><h1 style={{color: '#153555'}}>Independent Notary
                <br/>& Loan Signing Services</h1>
                </Col>
            </Row>
            <Row className="px-4 py-2 head">
                <Col md={{ span: 7, offset: 3 }}>
                <div> 
                  <a href="#about"><button className="btn btn-full"  style={{marginRight: '10px'}}>About Me</button></a>
                  <a href="#contact"><button className="btn btn-ghost">Book Signing</button></a>
                </div>
                </Col>
            </Row>
            <>


            <style type="text/css">
                {`
                @media screen and (max-width: 1600px) {
                  h1 {
                    font-size: 300%;
                  }
                }
                @media screen and (max-width: 800px) {
                  h1 {
                    font-size: 225%;
                  }
                }
                @media screen and (max-width: 600px) {
                  h1 {
                    font-size: 150%;
                  }
                }
                @media screen and (max-width: 420px) {
                  h1 {
                    font-size: 150%;
                  }
                }
                @media screen and (max-width: 360px) {
                  h1 {
                    font-size: 20px;
                  }
                  div.head {
                    padding-top: -30px;
                  }
                }
                .btn,
                .btn:visited,
                input[type=submit] {
                  margin-top: 5px;
                  display: inline-block;
                  padding: 10px 30px;
                  font-weight: 300;
                  text-decoration: none;
                  border-radius: 200px;
                  transition: background-color 0.2s, border 0.2s, color 0.2s;
                
                }
                
                .btn-full,
                .btn-full:visited,
                input[type=submit] {
                  background-color: #153555;
                  border: 1px solid #153555;
                  color: #fff;
                  margin-right: 15px;
                }
                
                .btn-ghost,
                .btn-ghost:visited {
                  border: 1px solid #153555;
                  color: #153555;
                  background-color: #fff;
                }
                
                .btn-ghost:hover,
                .btn-ghost:active {
                  border: 1px solid #0e243a;
                  color: #fff;
                }
                
                
                .btn:hover,
                .btn:active,
                input[type=submit]:hover,
                input[type=submit]:active {
                  background-color: #0e243a;
                }
                
                .btn-full:hover,
                .btn-full:active {
                  border: 1px solid #0e243a;
                  color: #fff;
                }
                
                `}
            </style>


            </>
            </div>
            </div>

    )
}

export default Header
