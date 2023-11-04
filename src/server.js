import dotenv from 'dotenv';
import app from './app';
dotenv.config();

app.listen(process.env.PORT, () => {
  console.log(`acess http://localhost:${process.env.PORT}`);
  console.log(`server is runnig at port:${process.env.PORT}`);
});
