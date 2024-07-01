const express = require('express');
const cors = require('cors');

require('dotenv').config();
const { PORT, URL_CLIENT } = require('./config');

const loggerHTTP = require('./utils/logger.utils');

const app = express();

const corsOptions = {

};

app.use(loggerHTTP);
app.use(cors(corsOptions));
app.use('/', require('./routes/index'));

app.listen(PORT, () => {

});
