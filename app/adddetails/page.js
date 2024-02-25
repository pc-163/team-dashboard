'use client'
import { useState } from 'react';
import { Row, Button, Card, InputGroup, Col, Form } from 'react-bootstrap';

export default function Home() {
    const [fullName, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [license, setLicense] = useState('');
    const [flyingHours, setflyingHours] = useState('');
    const [association, setAssociation] = useState('');
   const [profile, setProfile] = useState('');
   const [facebookLink, setfacebookLink] = useState('');
   const [instagramLink, setinstagramLink] = useState('');
   const [youtubeLink, setyoutubeLink] = useState('');
   const [wtLink, setwtLink] = useState('');
   const [xcLink, sexcLink] = useState('');


    const submitData = (e) =>{
        e.preventDefault();
        console.log("hello", fullName, email, license, flyingHours);
    }

    return (
        <main>
            <div className="container pt-5">
                <Row>
                    <Col></Col>
                    <Col xs={7} className='form_detail'>
                    {fullName}
                        <Form>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label htmlFor="basic-url">Your Name</Form.Label>
                                <Form.Control type="text" placeholder="Ex. Prakash Chand" value={fullName} onChange={(event)=> setFullname(event.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label htmlFor="basic-url">Your Email</Form.Label>
                                <Form.Control type="email" placeholder="Ex. birbilling@gmail.com" value={email} onChange={(event)=> setEmail(event.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label htmlFor="basic-url">Your License No.</Form.Label>
                                <Form.Control type="text" placeholder="Ex. KL-46789" value={license} onChange={(event)=> setLicense(event.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label htmlFor="basic-url">Your Flying Hours</Form.Label>
                                <Form.Control type="text" placeholder="Ex. 500" value={flyingHours} onChange={(event)=> setflyingHours(event.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label htmlFor="basic-url">Your Paragliding Association</Form.Label>
                                <Form.Select aria-label="Default select example" value={association} onChange={(event)=> setAssociation(event.target.value)}>
                                    <option>Open this select menu</option>
                                    <option value="1">Billing Paragliding Association</option>
                                    <option value="2">BAPA</option>
                                    <option value="3">Extreme Flying Club</option>
                                    <option value="4">Pilot Union Bir</option>
                                    <option value="5">Sky Candy</option>
                                    <option value="6">Nayak Adventure</option>
                                    <option value="7">Mills Peak</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Your Image</Form.Label>
                                <Form.Control type="file" value={profile} onChange={(event)=> setProfile(event.target.value)} />
                            </Form.Group>

                            <Form.Label htmlFor="basic-url">Your Social Media Links</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon3">
                                    https://facebook.com/
                                </InputGroup.Text>
                                <Form.Control id="basic-url" aria-describedby="basic-addon3" placeholder='Ex.birbillingindia' value={facebookLink} onChange={(event)=> setfacebookLink(event.target.value)}/>
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon3">
                                    https://instagram.com/
                                </InputGroup.Text>
                                <Form.Control id="basic-url" aria-describedby="basic-addon3" placeholder='Ex.birbillingindia' value={instagramLink} onChange={(event)=> setinstagramLink(event.target.value)}/>
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon3">
                                    https://youtube.com/@
                                </InputGroup.Text>
                                <Form.Control id="basic-url" aria-describedby="basic-addon3" placeholder='Ex.birbillingindia' value={youtubeLink} onChange={(event)=> setyoutubeLink(event.target.value)}/>
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon3">
                                    https://wa.me/
                                </InputGroup.Text>
                                <Form.Control id="basic-url" aria-describedby="basic-addon3" placeholder='Ex.918219980875' value={wtLink} onChange={(event)=> setwtLink(event.target.value)}/>
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon3">
                                    XC Track Link
                                </InputGroup.Text>
                                <Form.Control id="basic-url" aria-describedby="basic-addon3" placeholder='Ex. https://www.xcontest.org/world/en/flights/detail:pc163/25.1.2024/08:53' value={xcLink} onChange={(event)=> sexcLink(event.target.value)}/>
                            </InputGroup>
                            <Button variant="primary" type="submit" onClick={submitData}>
                                CLICK HERE
                            </Button>
                        </Form>
                    </Col>
                    <Col></Col>
                </Row>

            </div>
        </main>
    );
}
