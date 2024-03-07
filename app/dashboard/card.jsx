'use client'
//import { useState, useEffect } from 'react';
import { Row, Button, Card, Col } from 'react-bootstrap';
//import Picture from "@/public/assets/glider.jpg";
import Image from 'next/image';

import { FaUser } from "react-icons/fa6";

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Socialicons from '../component/socialicons';
import { HashLoader } from 'react-spinners';
import BookBtn from '../component/bookbtn';

import MyContext from "../context/context"
import { useContext } from "react";


function Cards() {
    const contextValue = useContext(MyContext);
    //console.log("page", contextValue);

    const Link = ({ id, children, title }) => (
        <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
            <a>{children}</a>
        </OverlayTrigger>
    );

    //const [maindata, setData] = useState([]);


   

    return (
        <Row sm={1} md={2} xl={3}>
            {
                // <Col className='mb-4'>
                //     <Card>
                //         <div className='card-set'>
                //             <Card.Body className='text-center p-0'>
                //                 <Image src={Picture} className="card_image" alt='Glider Image' priority={true}/>
                //                 <Button id='main_btn'> <AiFillThunderbolt /> Book Your Pilot</Button>
                //             </Card.Body>
                //             <Card.Body>
                //                 <div className="head_1">
                //                     <Card.Title><FaUser /> Prakash Chand</Card.Title>
                //                     <Card.Text>₹ 2999/per person</Card.Text>
                //                 </div>
                //                 <hr />
                //                 <div className="head_2">
                //                     <Button variant="primary"><Link title="Pilot License No." id="t-1">KL-46789</Link></Button>
                //                     <Button variant="secondary"><Link title="Flying Hours" id="t-2">500 Hours</Link></Button>
                //                     <Button variant="success"><Link title="Pilot Association Name" id="t-3">BPA</Link></Button>
                //                 </div>
                //             </Card.Body>
                //         </div>
                //         <Socialicons />
                //     </Card>
                // </Col>
            }
            {
                contextValue.maindata.length === 0 ? <HashLoader id='spinner' color="#FF5733" />
                    : contextValue.maindata.map((item, index) => (
                        <Col xs={12} className='mb-4' key={item._id}>
                            <Card>
                                <div className='card-set'>
                                    <Image src={item.profile} className="card_image" width='500' height='230' alt='Glider Image' priority={true} />

                                    {
                                       // <BookBtn id={item._id} />
                                    }
                                    <Card.Body>
                                        <div className="head_1">
                                            <Card.Title><FaUser /> {item.fullname} </Card.Title>
                                            <Card.Text>₹ 2999/per person</Card.Text>
                                        </div>
                                        <hr />
                                        <div className="head_2">
                                            <Button variant="primary"><Link title="Pilot License No." id="t-1">{item.license} </Link></Button>
                                            <Button variant="secondary"><Link title="Pilot Flying Hours" id="t-2">{item.flyinghours} Hours</Link></Button>
                                            <Button variant="success"><Link title="Pilot Association Name" id="t-3">{item.association}</Link></Button>
                                        </div>
                                    </Card.Body>
                                </div>
                                <Socialicons facebooklink={item.facebooklink} instagramlink={item.instagramlink} youtubelink={item.youtubelink} wtlink={item.wtlink} xclink={item.xclink} />
                            </Card>
                        </Col>
                    ))
            }


        </Row>
    );
}

export default Cards;