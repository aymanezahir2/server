import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './src/mongodb/connect.js';
import Route from './src/routes/route.js';
import Routesss from './src/routes/send.js';

dotenv.config();
const app = express();
app.use(cors());

app.use(express.json({ limit: "50mb" }));
app.use('/hello', Route);
app.use('/send', Routesss);

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
