class Queue{
    constructor(){
        this.data =[]
    }
    add(item){
        this.data.unshift(item)
    }
    remove(){
        return this.data.pop()
    }
}

const queue = new Queue()
queue.add(1)
queue.add(2)
console.log(queue.remove())
console.log(queue)