import { Button, Form } from 'react-bootstrap';
import MyContext from "../context/context"
import { useContext } from "react";

const SearchList = () => {
    const contextValue = useContext(MyContext);

    //console.log("header", contextValue.searchHandle);

    return (
        <div className="d-flex">
         
            
                <Form.Control
                    type="text"
                    placeholder="Search......"
                    className="me-2"
                    onChange={contextValue.searchHandle}
                />
            
        </div>
    )
}

export default SearchList