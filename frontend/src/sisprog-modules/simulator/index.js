import Memory from './components/memory'

export function test_memory() {
    const memory = new Memory()
    console.log(memory.get_at(0))
    memory.set_at(0, 2**8)
    console.log(memory.get_at(0))
}