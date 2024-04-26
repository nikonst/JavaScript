import mongoose from "mongoose";

async function connectMongo() {

    try {
        await mongoose.connect('mongodb://localhost/widgets')
        console.log("Successfully connected to MongoDB")
    }
    catch (e) {
        console.log(e)
    }
}

connectMongo()

const widgetSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    soldout: String,
    stores: Array,
})

const Widgets = mongoose.model('widgets', widgetSchema)

export { Widgets }