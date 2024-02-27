import Link from 'next/link';
import { Row, Button, Card, Col } from 'react-bootstrap';
import { AiFillThunderbolt } from "react-icons/ai";


const BookBtn = (id) => {
  
    return (
        <Card.Body className='text-center p-0'>
           <Link href={`/contact/${id.id}`}> <Button id='main_btn'> <AiFillThunderbolt /> Book Your Pilot </Button></Link>
        </Card.Body>
    )
}

export default BookBtn