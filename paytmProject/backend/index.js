//the main routing index
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;

const userRouter = require('./routes/user');
const accountRouter = require('./routes/accounts');
// app.use('/api/v1', rootRouter);
app.use(cors());
app.use(express.json());
app.use('/user', userRouter);
app.use('/account', accountRouter);

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
