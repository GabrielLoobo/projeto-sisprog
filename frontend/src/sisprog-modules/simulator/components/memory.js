export default class Memory {
    _memory;

    constructor(byteSize=4096){
        this._memory = new Array(byteSize).fill(0);
    }

    get_at(bitAddress){
        return this._memory[bitAddress << 8] // Supondo que o endereço passado seja em bits
    }

    set_at(bitAddress, value) {
        //TODO: Verificar se valor é válido. Deve ser algo entre 0 e 2**8 - 1
        this._memory[bitAddress << 8] = value;
    }

    get_memory(){
        return this._memory;
    }

}