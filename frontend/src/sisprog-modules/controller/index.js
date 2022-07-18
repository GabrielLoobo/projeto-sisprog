import ExecutionSimulator from '../simulator/index'
import Loader from '../loader-dumper/loader';

export default class Controller {
    _es;
    _loader;

    constructor() {
        this._es = new ExecutionSimulator();
        this._loader = new Loader();
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

        const MOCKED_BINARY_STRING = '000000000000001111111111000011111111000010101010'


        const initialAddress = this._loader.loadFromBinaryString(MOCKED_BINARY_STRING, this._es._memory);
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