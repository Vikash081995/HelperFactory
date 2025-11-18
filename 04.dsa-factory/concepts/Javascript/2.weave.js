//implement a peek method in queue class
//peek should return the last element (the next one to be returned ) from the queue without removing it 
//Implement the weave function .weave receives two queues as arguments and combines the content of each into a new , third queue.
//the third queue should contain the alterating content of the two queues. this function should handle queues of different lengths without inserting undefined into the new one 
//do not access the array inside of any queue , only use add , remove and peek function 


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
}

const queue = new Queue();
queue.add(1);
queue.add(2);
console.log(queue.remove());
console.log(queue);