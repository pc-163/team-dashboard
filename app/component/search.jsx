import { Button, Form } from 'react-bootstrap';

const SearchList = () => {
   
    return (
        <div className="d-flex">
         
            
                <Form.Control
                    type="text"
                    placeholder="Search......"
                    className="me-2"
                    onChange={searchHandle}
                />
            
        </div>
    )
}

export default SearchList