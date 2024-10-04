import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
import { Popover, OverlayTrigger } from 'react-bootstrap';

function NavMenu() {
    const cartItems = useSelector(state => state.cart.cartItems);
    const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

    const popover = (
        <Popover id="cart-popover">
            <Popover.Body>{cartCount} items in cart</Popover.Body>
        </Popover>
    );


    return (
        <Navbar expand="lg" className="bg-transparent d-flex justify-content-between">
            <Container className="d-flex justify-content-center">
                <Navbar.Brand as={Link} to="/">
                    <Logo />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as="a" href="https://www.instagram.com/direct/t/17845977407818382" target='_blank' rel="noreferrer">
                            Contact Us |
                        </Nav.Link>
                        <Nav.Link as={Link} to="/login">Login |</Nav.Link>
                        <Nav.Link as={Link} to="/">store</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <OverlayTrigger trigger="hover" placement="bottom" overlay={popover}>
                    <Link to="/cart" className="cart-icon">
                        <FaShoppingCart size={24} />
                        <span className="cart-count">{cartCount}</span>
                    </Link>
                </OverlayTrigger>
            </Container>
        </Navbar>
    );
}

export default NavMenu;
