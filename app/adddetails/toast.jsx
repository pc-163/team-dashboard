import { Toast, ToastContainer } from 'react-bootstrap';

const ToastButton = ({setShow, show}) => {
    return (
        <ToastContainer position="top-end" className="p-5 mt-5" bg="danger" style={{ zIndex: 1 }}>
            <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                <Toast.Header>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">Error</strong>
                    <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>All Fields are Required!</Toast.Body>
            </Toast>
        </ToastContainer>
    )
}

export default ToastButton