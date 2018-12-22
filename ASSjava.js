//ASS1
//Question-1
//What is variable? Please explain shortly.
//
//A variable is any container which can hold a data, you can use and reassign later on and declare a variable using a keyword var.
//
//Question-2
//Write a JAVASCRIPT program that asks you to enter:
//   YourName,
//   Programming Language You are Learning,
//   The School You Are Going,
//   Start Date at School to Study,
//   Company Name,
//   Work Start Date,
//   Job Title,
//   Salary
//
//   Print in the console:
//   My name is "NAME". I started to study "LANGUAGE" in "SCHOOL" on "DATE". I will start working in "COMPANY" on "START_DATE" as a "JOB_TITLE" with a salary of "SALARY"
//
//var fName=prompt("Enter your full name");
//var language=prompt("Enter the language you are learning");
//var school=prompt("Enter your school");
//var start=prompt("Enter your start date");
//var cName=prompt("Enter company name");
//var wStart=prompt("Enter the date you start work");
//var jobTitle=prompt("Enter your job title");
//var salary=prompt("Enter your salary");
//console.log(`My Name is ${fName}. I started to study ${language} in ${school} on ${start}. I will start working in ${cName} on ${wStart} as a ${jobTitle} with a salary of ${salary}`);
//
//Question-3
//Which one/ones is not a legal identifier in JAVASCRIPT and why?
//   var P2_a%88$
//   var 2l_apple;
//   var $12bh_kl;
//   var continue;
//   var _______;
//
//var 2l_apple; is not legal identifiyer in Javascript, variable should not start with number or special caracters execpt _ and $.
//
//Question-4
//Write a JAVASCRIPT program that calculates BMI.
//Ask user to enter his/her weight in lb
//Ask user to enter his/her height in inches
//Convert weight lb to kg
//Convert height inches to meter
//
//Calculate BMI=Weight(in kg)/(height(in meter)*height(in meter))
//
//Print in the console: Your BMI is "BMI"
//
//
//var w1=prompt("Enter your weight in lb");
//var h1=prompt("Enter your height in inches");
//var w=w1*.454;
//var h=h1*.0254;
//var BMI =w/(h*h);
//console.log(`Your BMI is: ${BMI}.`);
//
//
//Question-5
//
//What will be the outputs of these codes?(do not use bracket or any other IDE)
//
//   var a=10, b=0;
//   console.log(!(a>b));
//	=> False
//   console.log((a>b) && (b==0));
//	=> True
//   console.log((a>b) && !(a==10));
//	=> False
//   console.log((a===b)||(!true)&&(b>a));
//	=> False

//ASS2
//Question-1
//Write a JAVASCRIPT program that asks user to enter a number and prints  "it is odd number" or "it is even number"
//var num=parseInt(prompt("Enter your number"));
//if(num%2==1){
//	console.log(`It is odd: ${num}`);
//}else if(num%2==0){
//	console.log(`It is even: ${num}`);
//}else{
//	console.log(`Enter a number`);
//}
//
//Question-2
//Write a JAVASCRIPT program that prints "OK" if the number entered by user is divisible by 2 and 3. If not print "NOT OK"
//var num=parseInt(prompt("Enter your number"));
//if(num%6==0){
//	console.log(`OK`);
//}else{
//	console.log(`NOT OK`);
//}
//Question-3
//Write a JAVASCRIPT program that prints :
//"Divisible by 2 and 3" if the number entered is divisible by 2 and 3
//"Divisible by 2" if the number entered is divisible by only 2
//"Divisible by 3" if the number entered is divisible by only 3 
//"Not divisible by 2 or 3" if  number entered is not divisible by 2 or 3
//var num=parseInt(prompt("Enter your number"));
//if(num%6==0){
//console.log(`Divisible by 2 and 3`);
//}else if(num%2==0){
//	console.log(`Divisible by 2`);
//}else if(num%3==0){
//	console.log(`Divisible by 3`);
//}else{
//	console.log(`Not divisible by 2 and 3`);
//}
//Question-4
//Write a JAVASCRIPT program that prints "It is a good number" if it is divisible by 4, 5, and 6. If not print  "It is not a good number"
//var num=parseInt(prompt("Enter your number"));
//if(num%120==0){
//	console.log(`It is a good number`);
//}else{
//	console.log(`It is not a good number`);
//}
//Question-5
//Write a JAVASCRIPT program that prints "It is a good number" if the number entered by user is between 0 and 100 and divisible by 2. If not, print "It is not a good number"
//var num=parseInt(prompt("Enter your number"));
//if(num>=0&&num<=100&&num%2==0){
//	console.log(`It is good number`);
//}else{
//	console.log(`It is not good number`);
//	}
//
//
//Question-6
//Write a JAVASCRIPT program that asks user to enter 3 numbers and prints "It is good" if one of the number is greater than 50. If none of the number is greater than 50, print : "It is not good"
//var n1=parseInt(prompt("Enter first number"));
//var n2=parseInt(prompt("Enter second number"));
//var n3=parseInt(prompt("Enter third number"));
//if(n1>50||n2>50||n3>50){
//	console.log(`It is good`);
//}else{
//	console.log(`It is not good`);
//}
//Question-7
//Write a JAVASCRIPT program that asks user to enter 3 numbers and prints "It is successful"  if all numbers are greater than 0 and all numbers are even. If not, print "It is not successful"
//var n1=parseInt(prompt("Enter first number"));
//var n2=parseInt(prompt("Enter second number"));
//var n3=parseInt(prompt("Enter third number"));
//if(n1>0&&n2>0&&n3>0&&n1%2==0&&n2%2==0&&n3%2==0){
//	console.log(`It is successful`);
//}else{
//	console.log(`It is not successful`);
//}
//
//
//

//ASS3
//Question-1
//How do you define a for loop in JAVASCRIPT.
//For loop in Javascript use to excute the same block code a spesified number of times.
//Question-2
//Write a for loop that prints the numbers from 1 to 100.
//for(var i=1;i<=100;i++){
//	console.log(i);
//}
//Question-3
//Write a JAVASCRIPT program that displays from 1 mile to 10 miles to kilometers.
//for(var i=1;i<=10;i++){
//	var km=i*1.6;
//	console.log(`${km} km`);
//}
//Question-4
//Write a JavaScript program to print all the numbers between 30 and 200 (including 30 and 200)
//which are divisible by 4 and 6.
//for(var i=30;i<=200;i++){
//	if(i%24==0){
//		console.log(i);
//	}
//}
//Question-5
//Print the table of 6 using for loop.
//Output should be in following format:
//6 X 1 = 6
//6 X 2 = 12
//6 X 3 = 18
//6 X 4 = 24
//6 X 5 = 30
//6 X 6 = 36
//6 X 7 = 42
//6 X 8 = 48
//6 X 9 = 54
//6 X 10 = 60
//for(var i=1;i<=10;i++){
//	var R=6*i;
//	console.log(`6*${i}=${R}`)
//}
//
//ASS4
//Question-1
//How do you define an Array in JavaScript?
//=> An array is a special type of variable that 
//	can hold more than one value
//Question-2
//Read the entries of an array of 10 integers from a user. Compute x as the
//average of the 10 entries and then compute the average of those entries that
//are greater than or equal to x. Print this final average.
//var array=[];
//var SUM=0;
//var SUM1=0;
//var count=0;
//for(var i=0;i<10;i++){
//
//var y=parseInt(prompt("Enter your number "+(i+1)));
//	array.push(y);
//	SUM=SUM + array[i];
//var x=SUM/array.length;
//}
//	for(var j=0;j<array.length;j++){
//	if(x<=array[j]){
//		SUM1=SUM1+array[j];
//		count++;
//	}else{
//		SUM1=SUM1;
//		count;
//	}
//	var x1=SUM1/count;
//	}
//	console.log(x1);



//Question-3
//Write a JAVASCRIPT program that sets up an array of integers with capacity 20.
//It should then generate the 20 entries randomly in turn. Each entry must be
//an integer between l and 20, however it must also be different from all previous
//entries in the array. Generate the entries as random numbers and repeatedly make
//new numbers until a legal entry value is found. The program should finish
//by printing the list of 20 array values that it has selected.

//var array = []
//
// while(array.length < 20){
//
//    var random = Math.floor(Math.random()*20) + 1;
//
//    if(array.indexOf(random) > -1) 
//		continue;
//
//    array[array.length] = random;
//
//}
//
//console.log(array);

