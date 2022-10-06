
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { db as firebaseDB } from '../FireBase';
const Homepage = () => {
    const [data, setdata] = useState({});

    useEffect(() => {
        firebaseDB.child('contacts').on('value', (shapshot) => {
            if (shapshot.val() !== null) {
                setdata({ ...shapshot.val() })
            } else {
                setdata({})
            }
        })
        return () => {
            setdata({});
        }
    }, [])

    const onDelete = (id) => {
        if (window.confirm('are you sure?')) {
            firebaseDB.child(`/contacts/${id}`).remove((err) => {
                if (err) {
                    toast.error(err)
                } else {
                    toast.success('contact deleted successfully');
                    alert('успешно удалено ');
                }
            })
        }
    }
    return (
        <div style={{ marginTop: "100px" }}>
            <table>
                <thead>
                    <tr>
                        <th style={{ textAlign: 'center' }}>No.</th>
                        <th style={{ textAlign: 'center' }}>Name</th>
                        <th style={{ textAlign: 'center' }}>Email</th>
                        <th style={{ textAlign: 'center' }}>Contact</th>
                        <th style={{ textAlign: 'center' }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(data).map((id, index) => {

                        return (<tr key={id}>
                            <th scope={'row'}>{index + 1}</th>
                            <td>{data[id].name}</td>
                            <td>{data[id].email}</td>
                            <td>{data[id].contact}</td>
                            <td>
                                <Link to={`/update/${id}`}><button>Edit</button></Link>
                                <button onClick={() => onDelete(id)}>Delete</button>
                                <Link to={`/view/${id}`}><button>View</button></Link>
                            </td>

                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Homepage;