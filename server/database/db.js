import mongoose from "mongoose";

export const Connection = async (username,password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.ztukgwu.mongodb.net/?retryWrites=true&w=majority`;

    try{
        await mongoose.connect(URL, {useUnifiedTopology: true,  //callback functions 
                                       useNewUrlParser: true,});

        console.log('Database Connected Successfully');
    } catch (error) {
        console.log('Error while connection with database', error.message);
    }
}

export default Connection;
