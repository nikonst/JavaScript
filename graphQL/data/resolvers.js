import crypto from "crypto"
import { Widgets } from "./dbConnectors.js";

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
    },
    createProduct: async ({ input }) => {

        const newWidget = new Widgets({
            name: input.name,
            description: input.description,
            price: input.price,
            soldout: input.soldout,
            stores: input.stores,
        })
        try {
            await newWidget.save()
            return newWidget
        } catch (e) {
            throw new Error(e)
        }
    },
    updateProduct: async ({input}) => {
        try {
            const updateWidgets = Widgets.findOneAndUpdate({_id:input.id}, input,
            {new: true})
            return updateWidgets
        } catch (e) {
            throw new Error(e)
        }
    },
    deleteProduct: async ({id}) => {
        try {
           await Widgets.deleteOne({_id: id})
           return "Successfully removed ... "
        } catch (e) {
            throw new Error(e)
        }
    }
}

export default resolvers   
