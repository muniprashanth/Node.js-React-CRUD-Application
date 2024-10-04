
import React,{useState,useEffect} from "react";
import { Form, Table, Button } from "react-bootstrap";
import CustomModal from '../CustomFormat/CustomModal';
const CustomerForm=({ showModal, crud, value, handleClose, create, remove, update, setValue, theme })=>{
    const [modalTitle, setModalTitle]=useState('');
    useEffect(()=>{
        if (crud === 0) 
        {
            setModalTitle('Add New Customer');
        }
        else if (crud === 1) 
        {
            setModalTitle('Update Customer');
        }
        else if(crud === -1)
        {
            setModalTitle('Remove Customer');
        }
    }, [crud]);
    const getContent=()=>{
        if (crud === 0 || crud === 1) 
        {
            return (
                <Form>
                    <Form.Group controlId="userName" className="mb-3">
                        <Form.Label>Customer Name</Form.Label>
                            <Form.Control
                                type="text"
                                className="form-control"
                                placeholder='Enter Customer Name'
                                name="customerName"
                                id="customerName"
                                defaultValue={value.name}
                                onChange={(e) => setValue({ ...value, name: e.target.value })}
                            />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid name.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="userName" className="mb-3">
                        <Form.Label>Age</Form.Label>
                            <Form.Control
                                type="number"
                                className="form-control"
                                placeholder='Enter Age'
                                name="age"
                                id="age"
                                defaultValue={value.age}
                                onChange={(e) => setValue({ ...value, age: e.target.value })}
                            />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid age.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="userName" className="mb-3">
                        <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="text"
                                className="form-control"
                                placeholder='Enter Phone Number'
                                name="phoneNumber"
                                id="phoneNumber"
                                pattern="[0-9]{10}"
                                defaultValue={value.phone_no}
                                onChange={(e) => setValue({ ...value, phone_no: e.target.value })}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid phone number.
                            </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="location" className="mb-3">
                        <Form.Label>Location</Form.Label>
                            <Form.Control
                                type="text"
                                className="form-control"
                                placeholder='location'
                                name="location"
                                id="lcoation"
                                defaultValue={value.location}
                                onChange={(e)=>setValue({ ...value, location: e.target.value })}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid Location.
                            </Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="primary" onClick={crud === 0 ? () => create() : () => update()}>Save</Button>
                </Form>
            );
        }
        else if (crud === -1)
        {
            return (
                <Form>
                    <p>Are you sure you want to delete Customer?</p>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>SNo</th>
                                <th>{value.Sno}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>{value.name}</td>
                            </tr>
                            <tr>
                                <td>Age</td>
                                <td>{value.age}</td>
                            </tr>
                            <tr>
                                <td>Phone Number</td>
                                <td>{value.phone_no}</td>
                            </tr>
                            <tr>
                                <td>Location</td>
                                <td>{value.location}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Button variant="primary" onClick={()=>remove()}>Save</Button>
                </Form>
            );
        }
    };

    return (
        <CustomModal
            showModal={showModal}
            handleClose={handleClose}
            title={modalTitle}
            body={getContent()}
            theme={theme}
        />
    );
};
export default CustomerForm;