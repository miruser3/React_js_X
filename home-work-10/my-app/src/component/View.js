import React, { useEffect, useState } from 'react';
import { Link ,useParams } from 'react-router-dom';
import { db as firebaseDB } from '../FireBase';

const View = () => {
    const { id } = useParams();
    
    const [user, setuser] = useState({});
    useEffect(() => {
        firebaseDB.child(`/contacts/${id}`)
            .get()
            .then((data) => {
                if (data.exists()) {
                    setuser({ ...data.val() })
                } else {
                    setuser({})
                }
            })
    },[id])
    return (
        <div style={{ marginTop: '150px' }}>
            <p>Contact Details</p>
            <div>
                <strong>ID:</strong>
                <span>{id}</span>
                <br />
                <br />

                <strong>email:</strong>
                <span>{user.email}</span>
                <br />
                <br />

                <strong>contact:</strong>
                <span>{user.contact}</span>
                <br />
                <br />

                <strong>name:</strong>
                <span>{user.name}</span>
                <br />
                <br />

                <Link to={"/"}>
                    <button>Go to back</button>
                </Link>
            </div>
        </div>
    );
};

export default View;