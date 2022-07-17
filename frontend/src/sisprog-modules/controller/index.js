import ExecutionSimulator from '../simulator/index'

export default class Controller {
    _es;

    constructor() {
        this._es = new ExecutionSimulator();
    }

    setupExecution(rawInputCode) {
        // Recebe o código do front end como string

        // Fazer: "Limpar" o código de comentários/coisas inúteis (baixa prioridade)
        // Fazer: Chamar o montador, passando o código recebido em rawInputCode e recebendo o código binário que será colocado na memória
        
        console.log(rawInputCode)
        console.log('Setup Execution')
    }
}