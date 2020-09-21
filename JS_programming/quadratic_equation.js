var a = prompt("Enter value of a","1");
		var b = prompt("Enter value of b","4");
		var c = prompt("Enter value of c","4");
 
		var root_part = Math.sqrt(b * b - 4 * a * c);
		var denominator = 2 * a;
 
		var root1 = ( -b + root_part ) / denominator;
		var root2 = ( -b - root_part ) / denominator;
 
		document.write("1st root: "+root1+"<br />");
		document.write("2nd root: "+root2+"<br />");