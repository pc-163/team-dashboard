'use client'
import { Row, Button, Card, Col } from 'react-bootstrap';
import Picture from "../assets/glider.jpg";
import Image from 'next/image';
import { AiFillThunderbolt } from "react-icons/ai";
import { FaUser } from "react-icons/fa6";

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Socialicons from './socialicons';

function Cards() {
    const Link = ({ id, children, title }) => (
        <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
            <a>{children}</a>
        </OverlayTrigger>
    );
    return (
        <Row md={2} xl={3}>
            <Col className='mb-4'>
                <Card>
                    <div className='card-set'>
                        <Card.Body className='text-center p-0'>
                            <Image src={Picture} className="card_image" alt='Glider Image' />
                            <Button id='main_btn'> <AiFillThunderbolt /> Book Your Pilot</Button>
                        </Card.Body>
                        <Card.Body>
                            <div className="head_1">
                                <Card.Title><FaUser /> Prakash Chand</Card.Title>
                                <Card.Text>₹ 2999/per person</Card.Text>
                            </div>
                            <hr />
                            <div className="head_2">
                                <Button variant="primary"><Link title="Pilot License No." id="t-1">KL-46789</Link></Button>
                                <Button variant="secondary"><Link title="Flying Hours" id="t-2">500 Hours</Link></Button>
                                <Button variant="success"><Link title="Pilot Association Name" id="t-3">BPA</Link></Button>
                            </div>
                        </Card.Body>
                    </div>
                    <Socialicons />
                </Card>
            </Col>
            
        </Row>
    );
}

export default Cards;