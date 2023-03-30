const express = require('express');
const app = express();
// const port = precess.ENV.PORT || 3000;
const port = 3000;
const routerApi = require('./routes/main.routes');

app.use(express.json());
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});

routerApi(app);