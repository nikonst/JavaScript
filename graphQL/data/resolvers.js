import crypto from "crypto"
import { Widgets } from "./dbconnectors";

// class Product {
//     constructor(id, { name, description, price, soldout, stores }) {
//         this.id = id;
//         this.name = name;
//         this.description = description;
//         this.price = price;
//         this.soldout = soldout;
//         this.stores = stores;
//     }
// }

const productDatabase = {};

const resolvers = {
    getProduct: async ({id}) => {
        try {
            const product = await Widgets.findById(id)
            return product
        }
        catch (e) {
            throw new Error(e)
        }
        return new Product(id, productDatabase[id])
    },
    createProduct: ({ input }) => {
        // let id = crypto.randomBytes(10).toString('hex');
        // productDatabase[id] = input;
        // return new Product(id, input);
    }
}

export default resolvers   
