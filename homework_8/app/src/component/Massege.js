import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ErorProductApp, GetProductApp, LoadProductApp } from '../reducer/Action';
import { ErrorSelector, Loading, ProductSelector } from '../reducer/Selector';


const Massege = () => {
    const dispatch = useDispatch();
    const laoding = useSelector(Loading);
    const product = useSelector(ProductSelector);
    const error = useSelector(ErrorSelector);

    const getProduct = () => {
        return async dispatch => {
            dispatch(LoadProductApp());
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/comments");
                const result = await response.json();
                dispatch(GetProductApp(result))
            } catch (error) {
                dispatch(ErorProductApp(error))
            }
        }

    }
    useEffect(() => {
        dispatch(getProduct());
    }, []);


    if (laoding) {
        return (<div><h2>...загрузка</h2></div>)
    }


    if (error) {
        return (<div><h2>Error occurred! </h2></div>)
    }


    return (
        <div>
            {product.map((i) => (
                <div key={i.id}>
                    <div> {i.name}</div>
                </div>
            ))}
        </div>
    );
};

export default Massege;