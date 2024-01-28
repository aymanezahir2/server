const express = require('express')

const cors = require('cors');
const connectDB = require( './mongodb/connect.js');
const Route = require('./routes/route.js');
const Routesss = require('./routes/send.js');

const  {readdirSync}  = require('fs')
require('dotenv').config()
const app = express();
app.use(cors());

app.use(express.json({ limit: "50mb" }));
app.use('/hello', Route);
app.use('/send', Routesss);
readdirSync("./routes").map((file)=>app.use("/",require("./routes/"+file)))
app.get('/', (req, res) => {
    res.send("hello world");
});

const PORT = 2004;

const startServer = async () => {
    try {
     connectDB(process.env.MONGOOSE_URL);
        // If you have a function to retrieve cosmetics data, call it here
        
    } catch (error) {
        console.log(error);
    }
    app.listen(PORT, () => console.log("listening on port :" + PORT));
};

startServer();
