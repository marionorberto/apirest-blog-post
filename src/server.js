// eslint-disable-next-line
import app from './app';
// eslint-disable-next-line

app.listen(process.env.PORT, () => {
  console.log(`acess http://localhost:${process.env.PORT}`);
  console.log(`server is runnig at port:${process.env.PORT}`);
});
