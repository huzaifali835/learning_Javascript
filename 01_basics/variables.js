const accountId = 1981831;
let accountEmail = "dev-huzaifa@gmail.com"
var accountName = "Huzaifa"
let accountState; // declared but don't assign any value, so It is undefined.

accountCity = "Hyderabad" // reserve memory without using declaring, not preferred but can use.

// accountId = 2; When you use const keyword while declaring a variable, It can't be changed.

accountEmail = "huzaifa@gmail.com"
accountName = "Huzaif"
accountCity = "Nawabshah"
//Using Console Table to display data in a form of table, while [] indicates the index of values.
console.table([accountId, accountEmail, accountName, accountCity, accountState]);

// Difference between Var and let.
// Difference of scope

function difference(){
    if(true){
        let x = 10;
        var y = 20;
        console.log(x); // It can be used in scoped, here scope means {}
    }
    //console.log(x); -> ReferenceError: x is not defined because it is block scope and functional scope.
    console.log(y);
}
difference();

