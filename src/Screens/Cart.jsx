import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import  CartItems   from '../Components/Cart/CartItems'
import './cart.scss'


export const Cart = () => {
    
    const [addItems] = useContext(CartContext)
    const [total, setTotal] = useState(0)
    
    const CartTotalPrice = () =>{
        const multiplication = addItems.map((element, id)=>
             element.price*element.stock
            )
        if(addItems.length>0)
        setTotal(multiplication.reduce((accumulator, currentValue) => accumulator + currentValue))
    }

    useEffect(() => {
        CartTotalPrice()
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [addItems])


    return addItems.length > 0 ?(
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <h4>Name</h4>
                </div>
                <div className="col-2">
                    <h4>Quantity</h4>
                </div>
                <div className="col-2">
                    <h4> Price </h4>
                </div>
                <div className="col-2">
                    <h4> Sum </h4>
                </div>
                <div className="col-2">
                </div>
                <div className="col-2">
                    <h4> Total </h4>
                </div>
            </div>
            <div>
                    {addItems.map((element, id)=>
                        <CartItems key= {id}{...element}></CartItems>
                    )}
            </div>
            <div className="row">
                <div className="col-2">
                </div>
                <div className="col-2">
                </div>
                <div className="col-2">
                </div>
                <div className="col-2">  
                </div>
                <div className="col-2">
                </div>
                <div className="col-2">
                    <h4> {total} </h4>
                </div>
            </div>
            <Link to={`/ConfirmBuy`}> Buy! </Link>
        </div>
    ):(
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-10 text-center">
                    <h1 className="text-light">There are no skins in the cart :(</h1>
                    <h1 className="text-light">Go home and add some skins!</h1>
                    <Link to={`/`}> 
                    <button className="btn btn-outline-light btn-lg mt-4">home</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Cart
