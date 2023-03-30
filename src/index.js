const express = require('express');
const app = express();
const dotenv = require("dotenv")
const routerApi = require('./routes/main.routes');

dotenv.config();
const port = process.env.PORT || 3000;

app.use(express.json());
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});

routerApi(app);