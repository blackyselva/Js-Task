// Task 1.

// 1. Find Addition
var a=5;
var b=9;
var c=a+b;
var addition=c;
console.log(addition);

// 2. Calculate subtraction

var x=10;
var y=30;
var z=y-x;
var subtration=z;
console.log(subtration);

// 3. Calculate Multiplication

var c=22;
var d=4;
var e=c*d;
var multiplication=e;
console.log(e);

// 4. Calculate Division

var a=32;
var b=8;
var c=a/b;
var division=c;
console.log(division);

// 5. Program to calculate Area of circle

function circle(radius)
{
    this.radius = radius;
  // area method
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };
}
var c = new circle(5);
console.log('Area =', c.area().toFixed(2));

// Another

var r=4;
console.log(Math.PI * r **2);

// 6. Program to calculate Area of Triangle

var base=20;
var height=12;
console.log((base * height)/2);

// 7. program for calculating simple Interest

var principal=12;
var rate=8;
var time=20;
console.log((principal * rate * time)/100);

// 8. Program for calculating square

var a=20;
console.log(a**2);

// 9. Program for calculaing Cube

var a=12;
console.log(6 * a**2);

// 10. Program to calculate total and average

var a=10, b=20, c=30, d=40, e=50, f=60;
var TotalSumOfAllNumbers=a+b+c+d+e+f;
var NumberOfItems=6;
console.log(TotalSumOfAllNumbers/NumberOfItems);

// 11. check number is prime or not

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

var num = 8;
if (isPrime(num)) {
  console.log(num + " is a prime number.");
} else {
  console.log(num + " is not a prime number.");
}

// 12. Program for larger Number

var a=10, b=15, c=22, d=40;
var Notlargernumber=a>b;
var largernumber=c<d;
console.log(Notlargernumber);
console.log(largernumber);

// 13. program to check number is positive or not

var a=12;
console.log(a>0);

// 14. Number even or odd

var a=10;
console.log(a % 2 ==0);

// 15. Number is greater than 10

var a=12;
console.log(a>10);

// 16. Program to check wather number is divisible by 5

var a=100;
console.log(a/5);