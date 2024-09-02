const express =require ("express");
const mongoose =require("mongoose");
require("dotenv").config();

const routers =require ("./routes/ToDoRoutes");

const cors =require("cors");

const app =express();

const PORT =process.env.PORT || 5000

//MIDDLEWARE

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("mongodb connected"))
.catch((err)=> console.log(err));

app.use("/api", routers);

app.listen(PORT,() =>console.log(`listening at ${PORT}...`));