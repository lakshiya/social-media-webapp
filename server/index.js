import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: "true" }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }))

app.use(cors());

app.use('/posts', postRoutes);
//  Setup DB connectivity via MongoDB Cloud atlas
const CONNECTION_URL = 'mongodb+srv://tpriya:voguepl12@cluster0.np1is7x.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 3400;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);