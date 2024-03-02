'use client'

import { useState, useEffect } from 'react';
import { Row, Button, Card, InputGroup, Col, Form } from 'react-bootstrap';
import 'dotenv/config'

const Contact = () => {

    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [calendar, setCalendar] = useState('');
    const [pickupPoint, setPickupPoint] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [message, setMessage] = useState('');
    const [numberPeople, setNumberPeople] = useState('');


    const submitData = async (e) => {
        e.preventDefault();
        if (!fullname || !email || !license || !profile || !flyinghours || !association || !facebooklink || !instagramlink || !youtubelink || !wtlink || !xclink) {
            return;
        }

        try {

            const api = await fetch('http://localhost:3000/api/mail', {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },

                body: JSON.stringify({ fullname, email, calendar, pickupPoint, contactNo, message, numberPeople }),
            });

            await api.json();

            // if (api.ok) {
            //     router.push('/');
            // }

        } catch (error) {
            console.log('submit-button catch', error);
        }



    }

    return (
        <>
            <main>

                <div className="container pt-5 mb-5">
                    <Row className='p-3'>
                        <Col></Col>
                        <Col xs={12} md={8} className='form_detail p-4'>

                            <Form>
                                <Row className='flex-column flex-lg-row'>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label htmlFor="basic-url">Your Name</Form.Label>
                                            <Form.Control type="text" placeholder="Prakash Chand" value={fullname} onChange={(event) => setFullname(event.target.value)} />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label htmlFor="basic-url">Your Email</Form.Label>
                                            <Form.Control type="email" placeholder="vijay@gmail.com" value={email} onChange={(event) => setEmail(event.target.value)} />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className='flex-column flex-lg-row'>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label htmlFor="basic-url">Your Contact</Form.Label>
                                            <Form.Control type="tel" placeholder="+919876543210" value={contactNo} onChange={(event) => setContactNo(event.target.value)} />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label htmlFor="basic-url">Your Flying Date</Form.Label>
                                            <Form.Control type="date" placeholder="Select Your Flying Date" value={calendar} onChange={(event) => setCalendar(event.target.value)} />
                                        </Form.Group>

                                    </Col>
                                </Row>

                                <Row className='flex-column flex-lg-row'>

                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label htmlFor="basic-url">No. of Peoples</Form.Label>
                                            <Form.Control type="number" placeholder="2-3" value={numberPeople} onChange={(event) => setNumberPeople(event.target.value)} />
                                        </Form.Group>

                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label htmlFor="basic-url">Your Pick up Point</Form.Label>
                                            <Form.Control type="text" placeholder="Hotel, Cafe, Landing Site , Near By 2-3km Distance" value={pickupPoint} onChange={(event) => setPickupPoint(event.target.value)} />
                                        </Form.Group>

                                    </Col>
                                </Row>

                                <Row className='flex-column flex-lg-row'>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label htmlFor="basic-url">Your Message</Form.Label>
                                            <Form.Control as="textarea" placeholder="Hello....." value={message} onChange={(event) => setMessage(event.target.value)}>

                                            </Form.Control>
                                        </Form.Group>
                                    </Col>

                                </Row>


                                <Button variant="primary" type="submit" onClick={submitData}>
                                    SUBMIT
                                </Button>
                            </Form>
                        </Col>
                        <Col></Col>
                    </Row>

                </div>

            </main>
        </>
    )
}

export default Contact