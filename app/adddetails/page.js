'use client'
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Row, Button, Card, InputGroup, Col, Form } from 'react-bootstrap';
//import Image from 'next/image';
import { toast } from 'react-toastify';

export default function Home() {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [license, setLicense] = useState('');
    const [flyinghours, setflyingHours] = useState('');
    const [association, setAssociation] = useState('NA');
    const [profile, setProfile] = useState(null);
    const [facebooklink, setfacebookLink] = useState('');
    const [instagramlink, setinstagramLink] = useState('');
    const [youtubelink, setyoutubeLink] = useState('');
    const [wtlink, setwtLink] = useState('');
    const [xclink, sexcLink] = useState('');

    const [loading, setLoader] = useState(false);

    const router = useRouter();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const imageData = (e) => {
        const file = e.target.files[0];
        const maxSize = 200 * 1024; // 200 KB in bytes
        const maxDimensions = { width: 1200, height: 600 };


        if (file.size > maxSize) {
            toast.error(`File size should not exceed ${maxSize / 1024} KB.`, {
                autoClose: 3000,
                hideProgressBar: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            const img = new Image();
            img.onload = () => {
                if (img.width > maxDimensions.width || img.height > maxDimensions.height) {
                    toast.error(`Image dimensions should not exceed ${maxDimensions.width} x ${maxDimensions.height} pixels.`, {
                        autoClose: 3000,
                        hideProgressBar: false,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                    });
                    return;
                }
                setProfile(reader.result);
            };
            img.src = reader.result;
        }
    }


    const submitData = async (e) => {
        e.preventDefault();

        if (!fullname || !emailRegex.test(email) || !license || !profile || !flyinghours || !association || !facebooklink || !instagramlink || !youtubelink || !wtlink || !xclink) {
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

            const api = await fetch('http://localhost:3000/api', {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    //authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`,
                },
                body: JSON.stringify({ fullname, email, license, flyinghours, association, profile, facebooklink, instagramlink, youtubelink, wtlink, xclink }),
            });

            const apiData = await api.json();
            //localStorage.setItem('pilotData', JSON.stringify(apiData.file));
            //localStorage.setItem("token", JSON.stringify(apiData.token));

            if (api.ok) {
                toast.success("Your Data Successfully Submit!", {
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
            console.log('submit-button catch', error);
        }
    }

    return (
        <main>

            <div className="container pt-5 pb-5">
                <Row className='p-3'>
                    <Col></Col>
                    <Col xs={12} md={8} className='form_detail p-4'>

                        <Form>
                            <Row className='flex-column flex-lg-row'>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="basic-url">Your Name</Form.Label>
                                        <Form.Control type="text" placeholder="Ex. Radhe Sham" value={fullname} onChange={(event) => setFullname(event.target.value)} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="basic-url">Your Email</Form.Label>
                                        <Form.Control type="email" placeholder="Ex. radhesham@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className='flex-column flex-lg-row'>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="basic-url">Your License No.</Form.Label>
                                        <Form.Control type="text" placeholder="Ex. KL-46789" value={license} onChange={(event) => setLicense(event.target.value.toUpperCase())} />
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="basic-url">Your Flying Hours</Form.Label>
                                        <Form.Control type="number" placeholder="Ex. 500" value={flyinghours} onChange={(event) => setflyingHours(event.target.value)} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className='flex-column flex-lg-row'>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="basic-url">Your Paragliding Association</Form.Label>
                                        <Form.Select value={association} onChange={(event) => setAssociation(event.target.value)}>
                                            <option>Open this select menu</option>
                                            <option value="BPA">Billing Paragliding Association</option>
                                            <option value="BAPA">Billing Adventure and Paragliding Association</option>
                                            <option value="EFCB">Extreme Flying Club</option>
                                            <option value="PUB">Pilot Union Bir</option>
                                            <option value="SC">Sky Candy</option>
                                            <option value="NY">Nayak Adventure</option>
                                            <option value="MP">Mills Peak</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group controlId="formFile" className="mb-3">
                                        <Form.Label>Your Image</Form.Label>
                                        <Form.Control type="file" name='file' onChange={imageData} />
                                    </Form.Group>
                                </Col>

                            </Row>
                            <Form.Label htmlFor="basic-url">Your Social Media Links</Form.Label>
                            <Row className='flex-column flex-xl-row'>
                                <Col>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon3">
                                            https://facebook.com/
                                        </InputGroup.Text>
                                        <Form.Control id="basic-url" aria-describedby="basic-addon3" placeholder='Ex.birbillingindia' value={facebooklink} onChange={(event) => setfacebookLink(event.target.value)} />
                                    </InputGroup>
                                </Col>
                                <Col>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon3">
                                            https://instagram.com/
                                        </InputGroup.Text>
                                        <Form.Control id="basic-url" aria-describedby="basic-addon3" placeholder='Ex.birbillingindia' value={instagramlink} onChange={(event) => setinstagramLink(event.target.value)} />
                                    </InputGroup>
                                </Col>
                            </Row>
                            <Row className='flex-column flex-xl-row'>
                                <Col>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon3">
                                            https://youtube.com/@
                                        </InputGroup.Text>
                                        <Form.Control id="basic-url" aria-describedby="basic-addon3" placeholder='Ex.birbillingindia' value={youtubelink} onChange={(event) => setyoutubeLink(event.target.value)} />
                                    </InputGroup>
                                </Col>
                                <Col>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon3">
                                            https://wa.me/
                                        </InputGroup.Text>
                                        <Form.Control id="basic-url" aria-describedby="basic-addon3" placeholder='Ex.918219980875' value={wtlink} onChange={(event) => setwtLink(event.target.value)} />
                                    </InputGroup>
                                </Col>
                            </Row>

                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon3">
                                    XC Track Link
                                </InputGroup.Text>
                                <Form.Control id="basic-url" aria-describedby="basic-addon3" placeholder='Ex. https://www.xcontest.org/world/en/flights/detail:pc163/25.1.2024/08:53' value={xclink} onChange={(event) => sexcLink(event.target.value)} />
                            </InputGroup>
                            
                            <Button variant="primary" type="submit" onClick={submitData}>
                                {
                                    loading ? <p className='mb-0'>Loading...</p>
                                        : <> Submit Detail </>
                                }
                            </Button>
                        </Form>
                    </Col>
                    <Col></Col>
                </Row>

            </div>

        </main >
    );
}
