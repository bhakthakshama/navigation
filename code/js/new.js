const n = [4, -3, 34, -8, 3];
function sum(n) {
    var sum = 0;
  
    for (var i = 0; i < n.length; i++) {
      if (n[i] > 0) {
        sum =sum+ n[i];
      }
    }
  
    return sum;
  }
  
  
  const result = sum(n);
  console.log(result);
  