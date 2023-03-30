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
        // return
    }
}

module.exports = WaiterServices;