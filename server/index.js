import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: "true" }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }))

app.use(cors());

app.use('/posts', postRoutes);
//  Setup DB connectivity via MongoDB Cloud atlas
const PORT = process.env.PORT || 3400;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);