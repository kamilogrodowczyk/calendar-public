const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./db');
const path = require('path');

const companyRouter = require('./routers/company');
const userRouter = require('./routers/user');
const eventRouter = require('./routers/event');

const app = express();
const PORT = process.env.PORT || 3030;

// app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
app.use(companyRouter);
app.use(eventRouter);
app.use(userRouter);

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '..', 'build')));

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
//   });
// }

app.get('/', (req, res) => {
  res.send('<h2>This is from index.js file</h2>');
});

// app.use((req, res, next) => {
//   res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
// });

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
