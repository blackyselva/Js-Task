// Task 7.

// a=['a','f','g','h','l','k']===>[1,6,7,8,12,11]

document.write("String value change number");
document.write("<br>");
document.write("<br>");

	var result = [];
	var alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var input = ['a','f','g','h','l','k'];
	for (let i=0; i<input.length; i++) {
		for (j=0; j<alphabets.length; j++) {
			if (input[i] == alphabets[j]) {
				result [i] = j+1;
			}
		}
	}
document.write(result);
document.write("<br>");
document.write("<br>");
document.write("<br>");

// 2.	a=[2,8,5,9,14,66,3,22,1]
		// Get the two digit numbers only and in order for array?
		// a=[14,22,66]
document.write("Two digit number show");
document.write("<br>");
document.write("<br>");

let a= [2,8,5,9,14,66,3,22,1];
a.sort();
for (i=0; i<a.length; i++) {
	if (9<a[i]) {
		document.write(a[i]);
		document.write("<br>");
	}
}

document.write("<br>");
document.write("<br>");
document.write("<br>");

// 3.	let a=[11,12,21,22,23,33,34,40,44]=>[11,22,33,44]

document.write("Same number show");
document.write("<br>");
document.write("<br>");

let b=[11,12,21,22,23,33,34,40,44];
for (i=0; i<b.length; i++) {
	if (b[i]%11==0) {
		document.write(b[i]);
		document.write("<br>");
	}
}

document.write("<br>");
document.write("<br>");
document.write("<br>");

// 4.	a=[0,1,2,3,10,20,30]=[0,1,10,2,20,3,30]

document.write("Order number");
document.write("<br>");
document.write("<br>");

let x= [0,1,2,3,10,20,30];
x.sort();
document.write(x);

document.write("<br>");
document.write("<br>");
document.write("<br>");

// 5.	var a=[5,10,"ram",20,"bala",40,"anand"]=["ram","bala","anand"]

document.write("Only number show");
document.write("<br>");
document.write("<br>");

let mixed=[5,10,"ram",20,"bala",40,"anand"];
let numbersOnly= mixed.filter(function(word) {
	return typeof word === 'string';
});
document.write(numbersOnly);
document.write("<br>");
document.write("<br>");
document.write("<br>");

// 6. age mention vote

document.write("Your area selected in mention your age");
document.write("<br>");
document.write("<br>");

let age= parseInt(prompt("Enter your age :"));
let sex= prompt("Enter your sex :");
if (sex == "female") {
	document.write("Urban areas");
} else if (sex == "male" && 20 <= age && age <= 40) {
	document.write("Anywhere");
} else if (sex == "male" && 40 <= age && age <= 60) {
	document.write("Urban areas");
} else {
	document.write("Error");
}

document.write("<br>");
document.write("<br>");
document.write("<br>");
