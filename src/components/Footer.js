import { Container, Row, Col } from 'react-bootstrap';
import './footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <Container className="section">
                {/* Footer Container */}
                <Row className="footer__container">
                    {/* Left Section - Logo, Contact Info */}
                    <Col md={6} className="footer__content mb-4">
                        <a href="#" className="footer__logo d-block mb-3">
                            <img alt="Rewaq logo" src="Assets/images/logorewaq.png" className="footer__logo-img" />
                        </a>

                        <h4 className="footer__subtitle mb-3">Contact</h4>

                        <p className="footer__description">
                            <strong>Address:</strong> soon!
                        </p>

                        <p className="footer__description">
                            <strong>Phone:</strong> +20 106 101 4924
                        </p>

                        {/* Social Links */}
                        <div className="footer__social">
                            <h4 className="footer__subtitle">Follow Us</h4>

                            <div className="footer__social-links d-flex gap-3">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/RewaqG">
                                    <img src="Assets/images/facebook.svg" alt="Facebook" className="footer__social-icon" />
                                </a>

                                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/Rewaqgallery">
                                    <img alt="Instagram" src="Assets/images/instagram.svg" className="footer__social-icon" />
                                </a>
                            </div>
                        </div>
                    </Col>

                    {/* Right Section - Links */}
                    <Col md={6} className="footer__content">
                        <h4 className="footer__title mb-3">Address</h4>

                        <ul className="list-unstyled footer__links">
                            <li>
                                <a href="#" className="footer__link">Home</a>
                            </li>
                            <li>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/direct/t/17845977407818382" className="footer__link">Contact Us</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <hr />

                {/* Footer Bottom */}
                <Row className="footer__bottom pt-3 border-0">
                    <Col className="text-center">
                        <p className="mb-0">&copy; 2024 Rewaq. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer >
    );
}
