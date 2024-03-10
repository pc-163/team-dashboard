'use client'
import { useState, useEffect } from 'react';
import { Row, Button, Card, Col } from 'react-bootstrap';
//import Picture from "@/public/assets/glider.jpg";
import Image from 'next/image';

import { FaUser } from "react-icons/fa6";

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Socialicons from '../component/socialicons';
import { HashLoader } from 'react-spinners';
import BookBtn from '../component/bookbtn';
import 'dotenv/config'
import SearchList from '../component/search';

const API = process.env.NEXT_PUBLIC_BASE_URL;

function Cards() {

    const Link = ({ id, children, title }) => (
        <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
            <a>{children}</a>
        </OverlayTrigger>
    );

    const [maindata, setData] = useState([]);

    
    const callApi = async () => {

        try {
            const api = await fetch(`${API}/api`);
            const data = await api.json();

            if (api.ok) {
                setData(data.data);
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

    const searchHandle = async (event) => {
        event.preventDefault();
        let key = event.target.value;
        if (key) {
            let result = await fetch(`${API}/api`);
            const newdata = await result.json();
            const resultData = newdata.data.filter((item) => item.fullname.toLowerCase().includes(key.toLowerCase()));
            if (resultData) {
                setData(resultData);
            }

        } else {
            callApi();
        }
    };

   

    return (
        <>
        <SearchList searchHandle={searchHandle} maindata={maindata}/> 

        <Row sm={1} md={2} xl={3}>
            {
                maindata.length === 0 ? <HashLoader id='spinner' color="#FF5733" />
                   :  maindata.map((item, index) => (
                        <Col xs={12} className='mb-4' key={item._id}>
                            <Card>
                                <div className='card-set'>
                                    <Image src={item.profile} className="card_image" width='500' height='230' alt='Glider Image' priority={true} />
                                     <BookBtn id={item._id} />
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
        </>
    );
}

export default Cards;