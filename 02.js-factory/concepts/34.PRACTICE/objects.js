let obj = {
  pCode: 1001,
  pName: "Apple",
  getData() {
    console.log(obj.pCode, obj.pName); //1001 Apple
  },
};

obj.getData();
//---------------------------------------------
let tv = "pcode";

let obj2 = {
  [tv]: 2001,
  pName: "apple",
  getData() {
    console.log(obj2.pcode, obj2.pName); //2001 apple
  },
};
obj2.getData();
//---------------------