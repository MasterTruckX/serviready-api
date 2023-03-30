const { response } = require("express");

class WaiterServices {
    constructor(){
        this.waiters = [];
        this.generateData();
    }

    generateData(){
        this.waiters = [
            {id:1, name: 'Ayla', lastName: 'Gooden', wage: 13.5, workDays: ['THU','FRI','SAT','SUN','MON']},
            {id:2, name: 'Marcello', lastName: 'Pagano', wage: 13, workDays: [,'FRI','SAT','MON','TUE']},
            {id:2, name: 'Masha', lastName: 'Stancic', wage: 14.5, workDays: ['WED','FRI','SAT','SUN','MON']}
        ]
    }

    create(newWaiter){
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                this.waiters.push(newWaiter);
                resolve();
            },1000);
        });
    }

    queryAll(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.waiters); // try
                // reject catch
            }, 1000);
        });
    }

    getById(id){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const selectedWaiter = this.waiters.filter(waiter => waiter.id === parseInt(id) )[0];
                resolve(selectedWaiter);
            }, 1000);
        });
    }

    editPartial(id, property, value){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = this.waiters.findIndex(waiter => waiter.id === parseInt(id));
                var waiter = this.waiters[index];
                waiter[property] = value;
                resolve();
            }, 1000);
        });
    }

    editComplete(id, waiter){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = this.waiters.findIndex(waiter => waiter.id === parseInt(id));
                this.waiters[index] = waiter;
                resolve();
            }, 1000);
        });
    }

    del(id){
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                const index = this.waiters.findIndex(waiter => waiter.id === parseInt(id));
                this.waiters.splice(index,1);
                resolve();
            },1000)
        });
    }

}

module.exports = WaiterServices;