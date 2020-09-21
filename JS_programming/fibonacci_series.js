var fibonacci_series = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var N = fibonacci_series(n - 1);
    N.push(N[N.length - 1] + N[N.length - 2]);
    return N;
  }
};
console.log("=================fibonacci series===========================");
 console.log(fibonacci_series(101));