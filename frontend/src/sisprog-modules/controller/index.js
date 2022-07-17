import ExecutionSimulator from '../simulator/index'
import Loader from '../loader-dumper/loader';

export default class Controller {
    _es;

    constructor() {
        this._es = new ExecutionSimulator();
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

        const loader = new Loader();
        loader.loadFromBinaryString(MOCKED_BINARY_STRING, this._es._memory);
        return {
            RD: this._es._RD.get(),
            PC: this._es._PC.get(),
            memory: this._es._memory.get_memory()
        }
    }
}