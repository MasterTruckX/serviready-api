const express = require('express');
const { getAll,getById,create,editPartial,editComplete,del } = require('../../controllers/waiters/index.js');
const waiterRouter = express.Router();

waiterRouter.get('/', getAll);

waiterRouter.get('/:id',getById);

waiterRouter.post('/',create);

waiterRouter.patch('/:id',editPartial);

waiterRouter.put('/:id',editComplete);

waiterRouter.delete('/:id',del);

module.exports = waiterRouter;