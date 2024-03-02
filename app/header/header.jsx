'use client'
import { Nav, Button, Navbar, Col, Form, Container } from 'react-bootstrap';
import styles from "../page.module.css";
import Link from 'next/link';
import SearchList from '../component/search';

const Header = () => {
  
    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary">   
                <Container fluid>
                    <Link href="/" id={styles.action1}>Team Bir Billing 🪂</Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="m-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link href="/adddetails" className='mx-2'><Button variant="primary">List Your Details!</Button></Link>
                            <Link href="/contact" className='mx-2'><Button variant="warning">Contact Us</Button></Link>
                        </Nav>
                        <SearchList />
                        
                    </Navbar.Collapse>
                    </Container>
            </Navbar>
        </header>
    );
}

export default Header;