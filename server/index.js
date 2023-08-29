import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import dalleRoutes from './router/dalle.routes.js';

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json({limig: "50mb"}));

app.use("/dalle", dalleRoutes);

app.get("/", (req, res) => {
     res.send("Hello World");
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})