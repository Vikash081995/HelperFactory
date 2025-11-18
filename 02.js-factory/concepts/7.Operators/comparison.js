//Abstract Equality or inequality operator (== or !=) converts their
//operands if the operands types do not match.
//==========================================================
"" == 0; //true
0 == "0"; //true
"" == "0"; //false
console.log(false == 0) //true
console.log(false == "0")//true
false == "0"; //true

"" != 0; //false
0 != "0"; //false
"" != "0"; //true
false != 0; //false
false != "0"; //false
false != "0"; //false
//====================================================
Number(""); //0
Number("0"); //0
Number(false); //0
Number(true); //1

//====================================================
// solution
var test = (a, b) => Number(a) == Number(b);
test(0, ""); //true
test("0", 0); //true
test("", "0"); //true
test("abc", "abc"); //false as operands are not numbers '
//====================================================
Number("0") == Number("0"); //true
new Number("0") == new Number("0"); //false

//====================================================
//Strict Equality or inequality operator (=== or !==) does not convert their operands.
"" === 0; //false
0 === "0"; //false
"" === "0"; //false
false === 0; //false
false === "0"; //false
//====================================================
