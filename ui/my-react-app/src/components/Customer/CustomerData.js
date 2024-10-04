import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Form, Button } from 'react-bootstrap';
import { variables } from '../../CustomBackEnd';
import { FontAwesomeIcon, Icons } from '../Custom/CustomIcons';
import CustomDate from '../CustomFormat/CustomDate';
import CustomEntity from '../Custom/CustomEntity';
import CustomPagination from '../Custom/CustomPagination';
import CustomerForm from './CustomerForm';
import SnackNotification from '../Custom/CustomNotification';

const CustomerData=({ theme })=>{
    const [errorMessage, setErrorMessage]=useState('');
    const [customers, setCustomers]=useState([]);
    const [crud, setCrud]=useState(0);
    const [showModal, setShowModal]=useState(false);
    const [value, setValue]=useState([]);
    const [currentPage,setCurrentPage]=useState(1);
    const [entries,setEntries]=useState(5);
    const [search, setSearch]=useState('');
    const paginate=(pageNumber)=>setCurrentPage(pageNumber);
    const [message,setMessage]=useState('');

    const handleCreate=()=>{
        setCrud(0);
        setShowModal(true);
        setValue([]);
    }

    const handleCloseModal=()=>{
        setCrud(0);
        setShowModal(false);
        setValue(null);
    }

    const handleEdit=(cust)=>{
        setCrud(1);
        setShowModal(true);
        setValue(cust);
    }
    
    const handleDelete=(cust)=>{
        setCrud(-1);
        setShowModal(true);
        setValue(cust);
    }

    const refreshListCustomer=()=>{
        fetch(variables.API_URL+'users')
            .then(response=>{
                if (!response.ok) 
                {
                    setErrorMessage('Server Down');
                    setMessage('Message');
                }
                return response.json();
            })
            .then(data=>{
                if(!data || data.length === 0) 
                {
                    setErrorMessage('No Data Exists');
                    setMessage('No Data Exists');
                } 
                else
                {
                    setCustomers(data);
                }
            })
            .catch(error => {
                setErrorMessage(error.message);
                setMessage(error.message);
            });
    };
    
    const createCustomer=()=>{
        fetch(variables.API_URL+"users/",{
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: value.name,
                age:value.age,
                phone_no:value.phone_no,
                location:value.location,
            }),
        })
        .then((response) => {
            setErrorMessage('Server Down');
            setMessage('Server Down');
            response.json()
        })
        .then((data) => {
            setMessage("Department created successfully");
            handleCloseModal();
            refreshListCustomer();
        })
        .catch((error) => {
            console.log(error.message);
            refreshListCustomer();
            setErrorMessage(error.message);
            handleCloseModal();
            setMessage(error.message);
        });
    };
  
    const updateCustomer=()=>{
        fetch(variables.API_URL+"users/"+value.Sno,{
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: value.name,
                age:value.age,
                phone_no:value.phone_no,
                location:value.location,
            }),
        })
        .then((response) => {
            setErrorMessage('Server Down');
            setMessage('Server Down');
            response.json()
        })
        .then((data) => {
            setMessage("Department updated successfully");
            handleCloseModal();
            refreshListCustomer();
        })
        .catch((error) => {
            console.log(error.message);
            refreshListCustomer();
            setErrorMessage(error.message);
            handleCloseModal();
            setMessage(error.message);
        });
    };
    const deleteCustomer=()=>{
        fetch(variables.API_URL+"users/"+value.Sno,{
            method: "DELETE",
        })
        .then((res)=>console.log(res))
        .then((data)=>{
            setMessage("Department deleted successfully ");
            handleCloseModal();
            refreshListCustomer();
        })
        .catch((error) => {
            setErrorMessage(error.message);
            console.log(error.message);
            setMessage(error.message);
        });
    };
    
    useEffect(() => {
        refreshListCustomer();
    }, []);

    return (
        <>
            <h1>Welcome</h1>
            <br/>
            {message ? 
                <SnackNotification message={message}/>
            : null}
            <Button onClick={()=>theme()}>Dark Theme</Button>
                <Button variant='primary' className="rounded-circle float-end" onClick={handleCreate}>
                    <FontAwesomeIcon icon={Icons.faPlus} />
                </Button>
            <br/><br/>
            <Form.Control
                type="search"
                placeholder="Search on the basis of Name and Location"
                className="sm"
                value={search}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
            />
            <br/><br/>    
            <>
                <div className='float-end'>
                    <CustomEntity entries={entries} setEntries={setEntries} setCurrentPage={setCurrentPage}/>
                </div>
                <div className='float-start'>
                    <CustomPagination data={customers} entries={entries} currentPage={currentPage} paginate={paginate}/>
                </div>
            </>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Employee Name</th>
                        <th>Age</th>
                        <th>Phone Number</th>
                        <th>Location</th>
                        <th>Created At(Date)</th>
                        <th>Created At(Time)</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.length === 0 ? (
                        <tr>
                            <td colSpan="9">{errorMessage}</td>
                        </tr>
                    ) : (
                        customers
                        .filter(cust=> {
                            if (!search) return true;
                            return (
                                cust.name.toLowerCase().includes(search) ||
                                cust.location.toLowerCase().includes(search)
                            )
                        })
                        .slice((currentPage-1)*entries,currentPage*entries).map((cust)=>(
                            <tr key={cust.Sno}>
                                <td>{cust.Sno}</td>
                                <td>{cust.name}</td>
                                <td>{cust.age}</td>
                                <td>{cust.phone_no}</td>
                                <td>{cust.location}</td>
                                <td>{<CustomDate dateString={cust.created_at}/>}</td>
                                <td>{new Date(cust.created_at).toLocaleTimeString()}</td>
                                <td>
                                    <Button className='rounded-circle' variant='primary' onClick={()=>handleEdit(cust)} ><FontAwesomeIcon icon={Icons.faPenClip}/></Button>
                                </td>
                                <td>
                                    <Button className='rounded-circle' variant='danger' onClick={()=>handleDelete(cust)}><FontAwesomeIcon icon={Icons.faTrashAlt}/></Button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>
            {showModal ? (
                <>
                    <CustomerForm
                        showModal={showModal}
                        crud={crud}
                        value={value}
                        handleClose={handleCloseModal}
                        create={()=>createCustomer(value)}
                        update={()=>updateCustomer(value)}
                        remove={()=>deleteCustomer(value.id)}
                        setValue={setValue}
                        theme={()=>theme()}
                    />
                </>
            ) : null}
        </>
    );
};

export default CustomerData;