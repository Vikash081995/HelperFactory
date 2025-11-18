setInterval(()=>{
    console.log("hello")
},2000)


function startCountDown(duration) {
  let secondsRemaining = duration;
  const h1 = document.getElementById("timer");

  const interval = setInterval(function () {
    h1.innerText = secondsRemaining;
    console.log(secondsRemaining)
    if (secondsRemaining === 0) {
      clearInterval(interval);
    }
    secondsRemaining -= 1;
  }, 1000);
}

startCountDown(10);
