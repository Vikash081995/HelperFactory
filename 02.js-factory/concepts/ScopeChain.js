let age = 10;

function outer() {
  let age = "ageless";
  if (true) {
    let age = 99;
    console.log(age); //99
  }
}

outer();

function Parent() {
  function Child() {
    console.log(age); //10
  }
  Child();
}
Parent();
