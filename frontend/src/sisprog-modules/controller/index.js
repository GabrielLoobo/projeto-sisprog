import ExecutionSimulator from '../simulator/index'
import Loader from '../loader-dumper/loader';
import Assembler from '../assembler';

export default class Controller {
    _es;
    _loader;
    _assembler;

    constructor() {
        this._es = new ExecutionSimulator();
        this._loader = new Loader();
        this._assembler = new Assembler();
    }
    
    getMemoryState(){
        return {
            RD: this._es._RD.get(),
            PC: this._es._PC.get(),
            memory: this._es._memory.get_memory()
        }
    }

    setupExecution(rawInputCode) {
        // Recebe o código do front end como string

        // Fazer: "Limpar" o código de comentários/coisas inúteis (baixa prioridade)
        // Fazer: Chamar o montador, passando o código recebido em rawInputCode e recebendo o código binário que será colocado na memória
        
        console.log(rawInputCode)
        console.log('Setup Execution')

        const assemblerResult = this._assembler.assembleFromRawInput(rawInputCode)
        const initialAddress = this._loader.loadFromBinaryString(assemblerResult, this._es._memory);
        this._es._PC.set(initialAddress)
        return {
            RD: this._es._RD.get(),
            PC: this._es._PC.get(),
            memory: this._es._memory.get_memory()
        }
    
    }

    runInstruction(){
        this._es.runNextInstruction();
        return this.getMemoryState();
    }
}