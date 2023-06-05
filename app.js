var div2 = document.getElementById("div2");
var div1 = document.getElementById("div1");
var div3 = document.getElementById("div3");
var div4 = document.getElementById("div4");
var div5 = document.getElementById("div5");
var div6 = document.getElementById("div6");
var div1A = document.getElementById("div1A");

var email = [];
var namesign = [];
var password = [];

function myFunction() {
  var email1 = document.getElementById("email").value;
 
  var name1 = document.getElementById("name").value;

  var password1 = document.getElementById("password").value;

  var password1 = document.getElementById("password").value;

  email.push(email1);
  namesign.push(name1);
  password.push(password1);

  console.log(email);
  console.log(namesign);
  console.log(password);

  alert("you are registered");
 
}

function forward() {
  var namesignin = document.getElementById("namesignin").value;
  var passwordsignin = document.getElementById("passwordsignin").value;
  var mainbudget = document.getElementById("mainbudget");
  

  for (i = 0; i < namesign.length; i++) {
    for (j = 0; j < password.length; j++) {
      if (namesignin === namesign[i] && passwordsignin === password[j]) {
        // div3.style.display = "block";
        // div4.style.display = "block";
        // div5.style.display = "block";
        // div6.style.display = "block";
        mainbudget.style.display = "flex";
        div1.style.display = "none";
        div1A.style.display = "none";
        username()
      } else {
        alert("name or password incorrect");
      }
    }
  }
  
  // username.innerHTML = name1;
}

function back() {
  div2.style.display = "block";
  div1.style.display = "none";
}
function back1() {
  div2.style.display = "none";

  div1.style.display = "block";
}

// it is a function to store a value from in form input in array  and check validation
// function myFunction() {
//         var a = []
//         var x = document.getElementById("myText").value;

//         a.push(x);

//         document.write(a)
//         var value = prompt("Enter");
//         for (i = 0; i < a.length; i++) {

//                 if (value === a[i] ) {

//                         alert("hammas")
//                 }
//                 else{

//                         alert("wrong")
//                 }

//         }

// }

function openOverlay() {
  var overlayDiv = document.getElementById("overlayDiv");
  overlayDiv.style.display = "block";
}

function openOverlayremove() {
  overlayDiv.style.display = "none";
}

// var prombt = +prompt("Enter number")
// var addbudget1 =  document.getElementById("add").value;
// var addbudget1 =  document.getElementById("add").value;
// console.log(addbudget);
// document.write(addbudget)

// var totalBudget =  document.getElementById("total-budget");
// var addbudget1 = document.getElementById("addbudget").value;
// var  addbudte =  +prompt("Enter")
// console.log(addbud)
// var addbud  = document.getElementById("total-budget")
// console.log(addbud)

// addbud.innerText = ""
// function addbudget(){

// }

// function displayValue() {
//         var userInput = prompt("Enter a number:");
//         document.getElementById("result").innerHTML = "You entered: " + userInput;
//       }
// add budget from the form
var inputElement = document.getElementById("addbudget"); // input of budget
var outputElement = document.getElementById("total-budget");
// add balance from the form

var balanceelement = document.getElementById("addbudget"); // input of balance
var outbalance = document.getElementById("Balance");
// add expense from the form

var expenseAmount = document.getElementById("expenseAmount"); // input of expense
var expenseoutput = document.getElementById("expence");

var expensevalue = expenseAmount.value;  // get value of expense

var sourceDiv = document.getElementById("appendExpenselist"); // child where add expenses
var container = document.getElementById("expenseList"); // parent div where expense category date append


var category = document.getElementById("category"); // get elemnt of category in expense list
var inputCategory = document.getElementById("inputCategory");
var expenseitem = document.getElementById("expenseitem"); // get elemnt of expense item in expense list
var inputDate = document.getElementById("inputDate");
var expensedate = document.getElementById("expensedate");  // get elemnt of expense date in expense list



function addbudget() {
  var value = inputElement.value;
  outputElement.innerHTML = value; // output of budget
  //  balanceelement.value
  var balancevalues = parseFloat(balanceelement.value);
  outbalance.innerHTML = balancevalues;


  // outbalance.innerHTML = balancevalues + ".00"; output of balance


}

// var expenseAmount = document.getElementById("expenseAmount").value;
// var expenseoutput = document.getElementById("expenseAmount");
// var addExpense    = document.getElementById("addExpense");

// function expensecal() {

//   var balanseMinus  = balancevalues -  expensevalue;

//   outbalance.innerHTML = balanseMinus + ".00";

//   }

// const arrayexpense = [].reduce(add, 0);

let arrayexpense = [];



// console.log(sum);


function expenseadd() {
  var balancevalues = parseFloat(balanceelement.value);
  var expensevalue = parseFloat(expenseAmount.value);
  // var mainexpenselist = document.getElementById("mainexpenselist");
  // mainexpenselist.style.display = "flex";
  // var expensevalue = expenseAmount.value;
  // expenseoutput.innerHTML = expensevalue ;
  arrayexpense.push(expensevalue)
  let sum = arrayexpense.reduce(function (a, b) {
    return a + b;
  });


  // console.log(arrayexpense);

  // with initial value to avoid when the array is empty


  // var expencePlus = expensevalue + expensevalue;

  expenseoutput.innerHTML = sum;
  var balanceminus = balancevalues - sum;
  outbalance.innerHTML = balanceminus;
  // expenseoutput.innerHTML = expencePlus;
  console.log(sum)

  // balanceMinus();
  hideexpenselist()
  addDiv();
  // console.log(balancecal);
  // expensecal()

  // var expenseBalancecal = expensevalue - balancevalues;

  // outbalance.innerHTML = balancevalues + ".00";
}




// function addDiv() {
//   var container = document.getElementById("container");

//   // Create a new div element
//   var newDiv = document.createElement("div");
//   newDiv.textContent = "This is a dynamically added div";

//   // Append the new div to the container
//   container.appendChild(newDiv);
// }





// main code to append div

function addDiv() {



  var expensevalue = expenseAmount.value;
  expenseitem.innerHTML = expensevalue;



  var categoryvalue = inputCategory.value;
  category.innerHTML = categoryvalue;



  var dateValue = inputDate.value;
  expensedate.innerHTML = dateValue;

  // Clone the sourceDiv element
  var clonedDiv = sourceDiv.cloneNode(true);

  // Append the cloned div to the container
  container.appendChild(clonedDiv);

  // Show the cloned div
  clonedDiv.style.display = "flex";

}



function username(){

  var namediv = document.getElementById("namediv");
  var name1 = document.getElementById("name").value;
  var username = document.getElementById("username");

  username.innerHTML = name1;
  // namediv.style.display = "block";

  


}

function hideexpenselist(){
  var div6 = document.getElementById("div6");
  div6.style.display = "block";
  

}