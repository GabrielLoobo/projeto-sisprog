export default class Memory {
    _memory;

    constructor(byteSize=4096){
        this._memory = new Array(byteSize).fill(0);
    }

    get_at(bitAddress){
        return this._memory[bitAddress << 8] // Supondo que o endereço passado seja em bits
    }

    set_at(bitAddress, value) {
        if (value > 2**8 -1 || value < 0) {
            throw new Error("Tentativa de inserção de valor muito grande ou pequeno na memória")
        } 
        
        this._memory[bitAddress << 8] = value;
    }

    get_memory(){
        return this._memory;
    }

}