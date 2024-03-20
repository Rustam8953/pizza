import mongoose from "mongoose";
import { User } from "../../models/User";

export async function POST(req) {
    const bodyForm = await req.json();
    mongoose.connect("mongodb+srv://pizzaProject:pizzaProject12345@cluster0.zdsbrts.mongodb.net/")
    const createdUser = await User.create(bodyForm);
    return Response.json(createdUser);
}