import { createContext, useContext, useReducer } from "react"
import { faker } from "@faker-js/faker";
import { cartReducer } from "./reducer";
import { productReducer } from "./reducer";

const Cart = createContext();

const Context = ({children})=>{

  faker.seed(99)
   
    const products = [...Array(20)].map(() => ({
        productname: faker.commerce.product(),
        price: faker.commerce.price(),
        id: faker.datatype.uuid(),
        image:faker.image.city(),
        fastDelivery: faker.datatype.boolean(),
        rating: faker.helpers.arrayElements([1, 2, 3, 4, 5]),
        inStock: faker.helpers.arrayElements([0, 3, 5, 6, 7])
      }));
    console.log(products)

    const [state, dispatch] = useReducer(cartReducer, {
      products: products,
      cart:[]
    })

      const [productState, productDispatch] =  useReducer(productReducer,{
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: "",
      })
   

    return <Cart.Provider value={{state, dispatch,productState, productDispatch}} >
           {children}
          </Cart.Provider>
}

export default Context

export const CartState = ()=>{
  return useContext(Cart)
}