import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; // Import the custom CSS file


const Footer = () => {
  return (
    <footer className="footer-container">
      <Container>
        <Row>
          <Col md={6}>
          <div className="contact-info">
            <h3>Contact Information</h3>
           
              <p>Email: vision@example.com</p>
              <p>Phone: +1 (123) 456-7890</p>
              <p>Whatsapp: 9658745632 </p>
            </div>
          </Col>
          <Col md={6}>
        <p className="add"><h3 >Address</h3>
            <p>Vision Institute velechery, Cityville-st, Chennai,TamilNadu-600042 </p>
            </p>
            
          </Col>
        </Row>
        <hr />
        <p className="text-center copyright">&copy; {new Date().getFullYear()} Vision Institute Management</p>
      </Container>
    </footer>
  );
};

export default Footer;
