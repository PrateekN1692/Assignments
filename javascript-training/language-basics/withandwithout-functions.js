
//TC - 1 Verify the login page
console.log("TEST 1")
console.log("Login to the application");
console.log("Accept the cookies");
console.log("Welcome page will display");

//TC - 2 Welcome icon & cookie icon will display
console.log("TEST 2")

loginpage();
console.log("Welcome icon & cookie will display");

function loginpage(){
    console.log("TEST 3")

console.log("Login to the application");
console.log("Accept the cookies");
console.log("Welcome page will display");

}

//Test case - 3 Verify the account balance

console.log("Test case 3");
loginpage()
console.log("My account balance is:"+getaccountbalance);

function getaccountbalance(){
    let accountbalance=10000;
    return accountbalance;
}