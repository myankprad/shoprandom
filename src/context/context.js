import { createContext } from "react"
import { faker } from "@faker-js/faker";

const Cart = createContext();

const Context = ({children})=>{
   
    const products = [...Array(20)].map(() => ({
        productname: faker.commerce.product(),
        price: faker.commerce.price(),
        id: faker.datatype.uuid(),
        image:faker.image.business(),
        fastDelivery: faker.datatype.boolean(),
        rating: faker.random.arrayElement([1, 2, 3, 4, 5]),
        inStock: faker.random.arrayElement()
      }));
    console.log(products)
   

    return <Cart.Provider>
           {children}
          </Cart.Provider>
}

export default Context
