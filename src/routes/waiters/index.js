const express = require('express');
const { getAll,getById,create,editPartial,editComplete,del } = require('../../controllers/waiters/index.js');
const waiterRouter = express.Router();

//queryAll
waiterRouter.get('/', getAll);

//geyByUd
waiterRouter.get('/:id',getById);

//createProfile
waiterRouter.post('/',create);

//updatePartial
waiterRouter.patch('/:id',editPartial);

//updateComplete
waiterRouter.put('/:id',editComplete);

//deleteProfile
waiterRouter.delete('/:id',del);

module.exports = waiterRouter;