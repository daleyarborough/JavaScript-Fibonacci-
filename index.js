# JavaScript-Fibonacci-
var recursive = function(n) {
    if(n <= 2) {
        return 1;
    } else {
        return this.recursive(n - 1) + this.recursive(n - 2);
    }
};

||

var fibo = function(n) { 
  return floor(pow(sqrt((1+sqrt(5))/2),n)/sqrt(5) + 0.5); 
}; 



