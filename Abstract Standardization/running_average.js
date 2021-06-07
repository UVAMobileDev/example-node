n=1;
curAvg = 0;
function runningAverage(newNum)
{
  curAvg = curAvg + (newNum - curAvg)/n; 
  n++;
  return curAvg;
}
console.log(runningAverage(2));
console.log(runningAverage(3));
console.log(runningAverage(4));