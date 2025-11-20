class Queue {
  constructor() {
    this.data = [];
  }
  add(item) {
    this.data.unshift(item);
  }
  remove() {
    return this.data.pop();
  }
  peek(){
    return this.data[this.data.length - 1];
  }
}
module.exports = Queue;

const queue = new Queue();
queue.add(1);
queue.add(2);
console.log(queue.remove());
console.log(queue);