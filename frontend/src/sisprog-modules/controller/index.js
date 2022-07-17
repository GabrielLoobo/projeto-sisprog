import ExecutionSimulator from '../simulator/index'

export default class Controller {
    _es;

    constructor() {
        this._es = new ExecutionSimulator();
    }

    setupExecution(rawInputCode) {
        console.log('Setup Execution')
    }
}