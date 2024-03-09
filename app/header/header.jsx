'use client'
import { Nav, Button, Navbar, Col, Form, Container } from 'react-bootstrap';
import styles from "../page.module.css";
import Link from 'next/link';

const Header = () => {

    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid className='justify-content-center'>
                    <Link href="/" id={styles.action1}>Team Bir Billing 🪂</Link>
                        <Nav
                            className="my-2 my-lg-0 d-inline m-sm-auto" id='nav_buttons'
                            navbarScroll
                        >
                            <Link href="/adddetails" className='mx-2'><Button variant="primary">List Your Details!</Button></Link>
                            <Link href="/contact" className='mx-2'><Button variant="warning">Contact Us</Button></Link>
                        </Nav>

                </Container>
            </Navbar>
        </header>
    );
}

export default Header;