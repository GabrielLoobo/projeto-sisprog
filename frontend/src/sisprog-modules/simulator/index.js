import Memory from './components/memory'
import Register from './components/register'

export function test_memory() {
    const memory = new Memory()
    console.log(memory.get_at(0))
    memory.set_at(0, 2**8)
    console.log(memory.get_at(0))
}

export default class ExecutionSimulator {
    _memory;
    _PC;
    _RD

    constructor(){
        this._memory = new Memory();
        this._PC = new Register();
        this._RD = new Register();
    }
}