'use client'

import { useState, useEffect } from 'react';
import { Row, Button, Col, Form } from 'react-bootstrap';
import 'dotenv/config'
import { toast } from 'react-toastify';
import 'dotenv/config'

const API = process.env.NEXT_PUBLIC_BASE_URL;

const Contact = () => {

    const [fullname, setFullname] = useState('');
    const [clientEmail, setEmail] = useState('');
    const [calendar, setCalendar] = useState('');
    const [pickupPoint, setPickupPoint] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [message, setMessage] = useState('');
    const [numberPeople, setNumberPeople] = useState('');

    const [loading, setLoader] = useState(false);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const submitData = async (e) => {
        e.preventDefault();
        if (!fullname || !emailRegex.test(clientEmail) || !calendar || !pickupPoint || !contactNo || !message || !numberPeople) {
            toast.error("All fields are required and an email must be similar to ex.demo123@gmail.com !", {
                autoClose: 1000,
                hideProgressBar: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
            setLoader(false);
            return;
        }
        setLoader(true);

        try {

            const api = await fetch(`${API}/api/mail`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({ fullname, clientEmail, calendar, pickupPoint, contactNo, message, numberPeople }),
            });

            await api.json();

            if (api.ok) {
                toast.success("Your message has been successfully sent. We will contact you very soon!", {
                    autoClose: 3000,
                    hideProgressBar: false,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                });
                setFullname('');
                setEmail('');
                setCalendar('');
                setPickupPoint('');
                setContactNo('');
                setMessage('');
                setNumberPeople('');
                setLoader(false);
                
            } else {
                toast.error("Network response was not ok", {
                    autoClose: 3000,
                    hideProgressBar: false,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                })
                setLoader(false);
            }

        } catch (error) {
            console.log({ message: error.message });
        }
    }

    return (
        <>
            <main>
                <div className="container pt-5 pb-5 space_sm">
                <h2 className='text-center'>Contact Us</h2>
                    <Row className='p-3'>
                        <Col></Col>
                        <Col xs={12} md={8} className='form_detail p-4'>

                            <Form>
                                <Row className='flex-column flex-lg-row'>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label htmlFor="basic-url">Your Name</Form.Label>
                                            <Form.Control type="text" placeholder="Harpreet Singh" value={fullname} onChange={(event) => setFullname(event.target.value)} />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label htmlFor="basic-url">Your Email</Form.Label>
                                            <Form.Control type="email" placeholder="harpreet@contact.com" value={clientEmail} onChange={(event) => setEmail(event.target.value)} />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className='flex-column flex-lg-row'>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label htmlFor="basic-url">Your Contact</Form.Label>
                                            <Form.Control type="number" placeholder="+91 9876543210" value={contactNo} onChange={(event) => setContactNo(event.target.value)} />
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
                                    {
                                        loading ? <p className='mb-0'>Loading...</p>
                                            : <> SUBMIT </>
                                    }
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