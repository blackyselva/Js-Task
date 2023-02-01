//  TASK 4

// 1. 

document.write("<br>");
document.write("<br>");

for (i=5; i>0 && i<=5; i--) {
	for (j=1; j<=i; j++) {
		document.write(j);
	}
	document.write("<br>");
}

document.write("<br>");
document.write("<br>");
document.write("<br>");

// 2. 

for (i=1; i<=5; i++) {
	for (j=1; j<=i; j++) {
		document.write(i);
	}
	document.write("<br>");
}

document.write("<br>");
document.write("<br>");
document.write("<br>");

// 3.  


for (i=1; i<=5; i++) {
	var num=65;
	for (j=1; j<=i; j++) {
		document.write(String.fromCharCode(num));
		num++;
	}
	document.write("<br>");
}