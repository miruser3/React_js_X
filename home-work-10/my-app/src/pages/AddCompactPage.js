import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { db as firebaseDB } from '../FireBase';


const initialState = {
    name: "",
    email: "",
    contact: ""
}
const AddCompactPage = () => {
    const [state, setState] = useState(initialState);
    const { name, email, contact } = state;

    const { id } = useParams();
   // console.log('id', id)
    const handlyInputChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !contact) {
            toast.error('please provide value into each input');
            alert('please provide value into each input');
        } else {
            if (!id) {
                firebaseDB.child('contacts').push(state, (err) => {
                    if (err) {
                        toast.error(err);
                        alert('error')
                    } else {
                        toast.success('contact aded successfully');
                        alert('contact aded successfully');
                    }
                })
            } else {
                firebaseDB.child(`contacts/${id}`).set(state, (err) => {
                    if (err) {
                        toast.error(err)
                        alert('err//id')
                    } else {
                        toast.success('contact updated successfully ')
                        alert('контакт успешно обновлен');
                    }
                })
            }
        }
    }
    return (
        <div style={{ marginTop: 100 }}>
            <form style={{ margin: 'auto', padding: 15, maxWidth: 400, alignContent: 'center' }} onSubmit={handleSubmit}>
                <label htmlFor={'name'}>Name</label>
                <input placeholder={'you name is ...'} id={'name'} type={'text'} name={'name'} value={name || ''} onChange={handlyInputChange} />

                <label htmlFor={'email'}>email</label>
                <input placeholder={'you email is ...'} id={'email'} type={'email'} name={'email'} value={email || ''} onChange={handlyInputChange} />

                <label htmlFor={'contact'}>Contact</label>
                <input placeholder={'you number is ...'} id={'contact'} type={'number'} name={'contact'} value={contact || ''} onChange={handlyInputChange} />

                <input type={'submit'} value={id ? "update" : "save"} />

            </form>
        </div>
    );
};

export default AddCompactPage;