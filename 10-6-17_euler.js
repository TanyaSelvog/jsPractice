var sum = 0;
for (var i = 0; i <= 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}



console.log('The sum of multiples of 3 and 5 below 1000 is ' + sum + '.');
