
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ADD_MASSEGE, deleteMassege } from '../store/actionTape';




const Massege = () => {
    const massege1 = useSelector(state => state.massege.massege);
    const dispatch = useDispatch();
    const { id } = useParams();
    const [value1, setvalue] = useState('')
    const massege = massege1.filter((item) => {
        if (!id) return true;
        return item.chatId === Number(id);
    });
    const handleDeleteMassege = (id) => (
        dispatch(deleteMassege(id))
       
    );
    const handleInput = (event) => (setvalue(event.target.value));

    const handleAddMassege = () => {
        // const a1 = Math.floor(Math.random()*4+1); 
        const random = Math.random()
        const obj = {
            id: random,
            chatId: Number(id),
            title: value1
        }
        dispatch({ type: ADD_MASSEGE, payload: obj })
       
    }

    return (
        <div>
             
            <input value={value1} onChange={handleInput}></input>
            <button onClick={handleAddMassege}>add</button>
            {massege.map((i) => (
                <div key={i.id}>
                    <div>{i.title}</div>
                    <div> <button onClick={() => handleDeleteMassege(i.id)}>delete</button></div>
                </div>
            ))}
        </div>
    );
};

export default Massege;