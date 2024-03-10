import { Button, Form } from 'react-bootstrap';

const SearchList = ({searchHandle, maindata}) => {
    
    return (
        <>
        <div className="d-flex card_search">
                <Form.Control
                    type="text"
                    placeholder="Search Your Pilot....."
                    className="m-auto"
                    onChange={searchHandle}
                />
            
        </div>
        <p className='text-center font-weight-normal'>Total Pilots - {maindata.length}</p>
        </>
    )
}

export default SearchList