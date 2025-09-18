//require("dotenv").config({path:'./.env'});

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path:'./.env'
})



connectDB()
.then(() =>{
    app.listen(process.env.PORT || 8000, () =>{
        console.log(`server is running at port: ${process.env.PORT}`);
    })
})
.catch((error) =>{
    console.log("DB connection failed ", error);
})














/*const connectDB = async () => {

try{
   const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
   console.log(`\n MongoDB connected !! DB HOST:
    ${connectionInstance.connection.host} `);
} catch (error){
    console.log("MONGODB connection error", error);
    process.exit(1)
}

}


export default connectDB
*/
