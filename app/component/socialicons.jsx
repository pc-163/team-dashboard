import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { MdOutlineParagliding } from "react-icons/md";
import { Card } from 'react-bootstrap';

const Socialicons = () => {
    return (
        <div className='card_set text-center'>
            <Card.Body>
                <a href="https://www.facebook.com/birbilling.in" target="_blank" title="Like & Share" id="t-4"><FaFacebookF /></a>
                <a href="https://www.instagram.com/birbilling.in" target="_blank" title="Follow Me" id="t-4"><FaInstagram /></a>
                <a href="https://www.youtube.com/@birbillingindia" target="_blank" title="Subscribe My Channel" id="t-4"><FaYoutube /></a>
                <a href="https://wa.me/918219980875" target="_blank" title="Dm Me" id="t-4"><FaWhatsapp /></a>
                <a href="https://www.xcontest.org/world/en/flights/detail:pc163/25.1.2024/08:53" target="_blank" title="Pilot XC Track Log" id="t-4"><MdOutlineParagliding /></a>
            </Card.Body>
        </div>
    )
}

export default Socialicons