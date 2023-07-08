const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(express.urlencoded({ extended: true }));

const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());

// Importing the routers
const userRouter = require('./routers/userRouter');
const performanceRouter = require('./routers/performaceRouter');

app.use('/users', userRouter);
app.use('/performances', performanceRouter);

app.use(express.json());

// Find an available port
const server = app.listen(0, () => {
  const port = server.address().port;
  console.log(`Server is running on port ${port}`);
});
