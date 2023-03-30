const routerWaiter = require('./waiters/index.js');
const routerApi = (app) => {
    app.use('/waiter',routerWaiter);
}

module.exports = routerApi;