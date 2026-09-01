import 'dotenv/config';
import express from 'express';
import studentRoutes from './routes/studentRoutes.js';
import productRoutes from './routes/productRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';
import { connectDB } from './config/db.js';

const app = express();
const port = 3000;


app.use(express.json());

app.use('/students', studentRoutes);
app.use('/products', productRoutes);


app.get('/', (req, res) => {
  res.send('Server is running')
});

app.use(errorHandler);


const startServer = async () => {
  try {
    await connectDB();

    app.listen(port, () => {
      console.log(`Server is running on: http://localhost:${port}`)
    })
  } catch (error) {
    console.error('Failed to start server')
  }
};

startServer();