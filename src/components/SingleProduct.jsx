import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { CartState } from '../context/context'
import Rating from './Rating'
import "./style.css"

const SingleProduct = ({prod}) => {
 const {state: { cart}, dispatch } = CartState()

  return (
    <div className="products">
        <Card>
            <Card.Img varient="top" src={prod.image} alt={prod.productname}/>
            <Card.Body>
                <Card.Title>{prod.productname}</Card.Title>
                <Card.Subtitle style={ {paddingBottom: 10} }>
                   <span>₹ {prod.price.split(".")[0]}</span>
                   {
                    prod.fastDelivery?(
                        <div>Fast Delivery</div>
                    ):(
                        <div>4 Days delivery</div>
                    )
                   }
                   <Rating rating={prod.rating} />
                </Card.Subtitle>
                {cart.some((p) => p.id === prod.id) ? (
            <Button
              variant="danger"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })
              }
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                })
              }
              disabled={!prod.inStock}
            >
              {!prod.inStock ? "Out of Stock" : "Add to Cart"}
            </Button>
          )}            </Card.Body>
        </Card>
    </div>
  )
}

export default SingleProduct

