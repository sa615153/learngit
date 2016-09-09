It is a good programming practice to declare all variables at the beginning of a script.

var person = "John Doe", carName = "Volvo", price = 200;

or multiple lines:

var person = "John Doe",
carName = "Volvo",
price = 200;



If you re-declare a JavaScript variable, it will not lose its value.



The result of adding "5" + 2 + 3:

523



If you add a number and a string, the result will be a string!
When adding a number and a string, JavaScript will treat the number as a string.



var x = 16 + 4 + "Volvo";
Result:
20Volvo
Try it Yourself »
JavaScript:
var x = "Volvo" + 16 + 4;
Result:
Volvo164




The typeof operator returns "object" for arrays because in JavaScript arrays are objects.



-------------
Methods are stored in properties as function definitions.

Property	Property Value
firstName	John
lastName	Doe
age	50
eyeColor	blue
fullName	function() {return this.firstName + " " + this.lastName;}

JavaScript objects are containers for named values.
JavaScript objects are containers for named values called properties or methods.
--------------



var person = {
    firstName: "John",
    lastName : "Doe",
    id       :  5566,
    fullName : function() {
       return this.firstName + " " + this.lastName;
    }
};
document.getElementById("demo").innerHTML = person.firstName + " " + person.lastName;
document.getElementById("demo").innerHTML = person.fullName();



You can access object properties in two ways:

objectName.propertyName
or
objectName["propertyName"]

You access an object method with the following syntax:
objectName.methodName()



With JavaScript, the global scope is the complete JavaScript environment.
In HTML, the global scope is the window object. All global variables belong to the window object.
var carName = "Volvo";
// code here can use window.carName
document.getElementById("demo").innerHTML = "I can display " + window.carName;




HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.

With single quotes:
<some-HTML-element some-event='some JavaScript'>
With double quotes:
<some-HTML-element some-event="some JavaScript">
Example
<button onclick='document.getElementById("demo").innerHTML=Date()'>The time is?</button>                          /
<button onclick="this.innerHTML=Date()">The time is?</button>                                                     /


