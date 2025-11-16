const dialogEl = document.getElementById('dialogEle')
const launchBtn = document.getElementById('launchBtn')
const formResult = document.getElementById('formResult')

launchBtn.addEventListener('click',()=>{
    dialogEl.showModal()
})

dialogEl.addEventListener("close", () => {
  formResult.textContent = dialogEl.returnValue;
});