const WaiterService = require('../../services/waiters/index.js');
const waiterService = new WaiterService();

const getAll = async (req,res) => {
    try{
        const waiters = await waiterService.queryAll();
        res.status(200).json(waiters);
    } catch(error){
        res.status(404).json({message: 'Data not found'});
    }
}

const getById = async (req,res) => {
    try{
        const id = req.params.id;
        const selectedWaiter = await waiterService.getById(id);
        res.status(200).json(selectedWaiter);
    } catch(error){
        res.status(404).json( { message: 'Profile not found' } )
    }
}

const create = async (req,res) => {
    try{
        const newWaiter = req.body;
        await waiterService.createProfile(newWaiter);
        res.status(201).send();
    } catch(error){
        res.status(500).json( { message: 'Fatal error: Profile was not created' } )
    }
}

const editPartial = async (req,res) => {
    try{
        const id = req.params.id;
        const key = req.body[0]; 
        const value = req.body[1];
        //const value = req.body.name;
        await waiterService.editPartial(id,key,value);
        // await waiterService.editPartial(id,value);
        res.status(200).send();
    } catch(error){
        res.status(500).json( { message: 'Fatal error: Profile was not updated' } )
    }
}

const editComplete = async (req,res) => {
    try{
        const id = req.params.id;
        const newWaiter = req.body;
        await waiterService.editComplete(id,newWaiter);
        res.status(200).send();
    } catch(error){
        res.status(500).json( { message: 'Fatal error: Profile was not edited'})
    }
}

const del = async (req,res) => {
    try{
        const id = req.params.id;
        await waiterService.del(id);
        res.status(200).send();
    } catch(error){
        res.status(500).json( { message: 'Fatal error: Profile was not delted'})
    }
}

module.exports = {
    getAll,
    getById,
    create,
    editPartial,
    editComplete,
    del,
}