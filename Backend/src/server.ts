import express from 'express';
import cors from 'cors';
import { car_list } from './data';

const app = express();
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));
app.get("/api/cars", (req, res) =>{
    res.send(car_list);
});

const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:"+port);
});