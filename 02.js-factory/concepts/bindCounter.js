class Counter {
  constructor(startingNum = 0, incrementAmt = 1) {
    this.count = startingNum;
    this.incrementAmt = incrementAmt;
  }
  start() {
    setInterval(function () {
      console.log(this.count);
      this.count += this.incrementAmt;
    }, 1000).bind(this);
  }
}

const counter = new Counter();
counter.start();
