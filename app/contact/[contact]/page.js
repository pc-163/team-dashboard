'use client'
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Row, Button, Col, Form } from 'react-bootstrap';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import 'dotenv/config'

const API = process.env.NEXT_PUBLIC_BASE_URL;

const ContactForm = () => {

    const [clientName, setFullname] = useState('');
    const [clientEmail, setEmail] = useState('');
    const [calendar, setCalendar] = useState('');
    const [pickupPoint, setPickupPoint] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [message, setMessage] = useState('');

    const [maindata, setData] = useState([]);

    const [loading, setLoader] = useState(false);

    const router = useRouter();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const params = useParams();
    const mainId = params.contact;

    const dataMapping = maindata.map((item) => {
        return {
            fullname: item.fullname,
            license: item.license,
            profile: item.profile,
        }
    });

    const pilotData = dataMapping[0];

    // console.log(firstName.fullname);
    // console.log(firstName.license);
    // console.log(firstName.profile);

    const submitData = async (e) => {
        e.preventDefault();

        if (!clientName || !emailRegex.test(clientEmail) || !calendar || !pickupPoint || !contactNo || !message || !pilotData) {
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

            const api = await fetch(`${API}/api/contact`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({ clientName, clientEmail, calendar, pickupPoint, contactNo, message, pilotData }),
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
                router.push('/');
            } else {
                toast.error("Network response was not ok", {
                    autoClose: 3000,
                    hideProgressBar: false,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                })
            }
        } catch (error) {
            console.log({ message: error.message });
        }
    }

    const callApi = async () => {

        try {
            const api = await fetch(`${API}/api`);
            const data = await api.json();

            if (api.ok) {
                const matchingData = data.data.filter((item) => item._id === mainId); // Filter based on mainId
                setData(matchingData);

            } else {
                console.log("API error:", data.error);
            }

        } catch (error) {
            console.log("API error:", error);
        }
    }

    useEffect(() => {
        callApi();
    }, [])


    return (
        <>
            <main>
                <div className="container pt-5 pb-5 space_sm">
                    <h2 className='text-center'>Book Your Paragliding</h2>
                    <Row className='p-3'>
                        <Col></Col>
                        <Col xs={12} md={8} className='form_detail p-4'>

                            <Form>
                                <Row className='flex-column flex-lg-row'>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label htmlFor="basic-url">Your Name</Form.Label>
                                            <Form.Control type="text" placeholder="Harpreet Singh" value={clientName} onChange={(event) => setFullname(event.target.value)} />
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
                                            <Form.Label htmlFor="basic-url">Your Pick up Point</Form.Label>
                                            <Form.Control type="text" placeholder="Hotel, Cafe, Landing Site , Near By 2-3km Distance" value={pickupPoint} onChange={(event) => setPickupPoint(event.target.value)} />
                                        </Form.Group>

                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label htmlFor="basic-url">Your Pilot</Form.Label>
                                            {
                                                maindata.length === 0 ? <p className='mb-0 text-white'>Loading...</p>
                                                    : maindata.map((item, index) => (
                                                        <div className='pilot_pic' key={item._id}>
                                                            <Image src={item.profile} alt={item.fullname} width='40' height='40' priority={true} />
                                                            <p>{item.fullname} 🪂</p>
                                                        </div>
                                                    ))
                                            }
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

export default ContactForm