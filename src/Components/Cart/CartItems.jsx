import React from 'react'
import { CartContext } from '../../Context/CartContext'
import { useContext } from 'react'

export const CartItems = props => {

    const { RemoveItem } = useContext(CartContext)
    return (
        <div className="row border-bottom text-center my-2">
            <div className="col-2">
                <h4>{props.name}</h4>
            </div>
            <div className="col-2">
                <h4>{props.stock}</h4>
            </div>
            <div className="col-2">
                <h4>{props.price}</h4>
            </div>
            <div className="col-2">
                <h4>{props.price * props.stock}</h4>
            </div>
            <div className="col-2">
                <button className="btn btn-outline-light mb-2" onClick={() => RemoveItem(props.id)}> Remove </button>
            </div>
            <div className="col-2">
            </div>
        </div>
    )
}

export default CartItems