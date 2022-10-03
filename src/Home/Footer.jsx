import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FaFacebook,FaInstagram,FaTwitter, FaYoutube,FaLinkedin,FaPinterest, FaUserAlt,FaTicketAlt,FaMailBulk } from "react-icons/fa";


function Footer() {
  return (
    <div style={{background:"black", color:"white",margin:"50px"}}>
        <Container>
            <Row style={{padding:"3%"}}>
                <Col>
                    LIST YOUR SHOW
                </Col>
                <Col>
                    Got a show,event or a great experience
                </Col>
                <Col xs={6} style={{display:"flex", flexDirection:"row-reverse"}}>
                   <Button variant="info">Contact Today!</Button>
                </Col>
            </Row>
            <Row>
               <Col>
                    <div style={{marginLeft:"25%"}}>
                       <FaUserAlt/>
                    </div>
                   <h4>24/7 Customer Care</h4>
               </Col>
               <Col>
                    <div style={{marginLeft:"45%"}}>
                       <FaTicketAlt/>
                    </div>
                   <h4>Resend Booking Confirmation</h4>
               </Col>
               <Col>
                    <div style={{marginLeft:"35%"}}>
                       <FaMailBulk/>
                    </div>
                   <h4>Subscribe to the NewsLetter</h4>
               </Col>
            </Row>
            <Row>
                <Container style={{textAlign:"center"}}>
                    <FaFacebook/>&nbsp;&nbsp;&nbsp;
                    <FaYoutube/>&nbsp;&nbsp;&nbsp;
                    <FaInstagram/>&nbsp;&nbsp;&nbsp;
                    <FaTwitter/>&nbsp;&nbsp;&nbsp;
                    <FaPinterest/>&nbsp;&nbsp;&nbsp;
                    <FaLinkedin/>
                </Container>
            </Row>
            <hr/>
            <Row>
                <h6 style={{textAlign:"center"}}>Copyright@2021</h6>
            </Row>
            <hr/>
        </Container>
    </div>
  );
}

export default Footer;