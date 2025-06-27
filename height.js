const height = [12,13,14,15,15,16,19,10];

function getmaax(numbers){
    let max = numbers[0];
for (const num of numbers){
   if (num>max){
    max = num;
   }
}
return max;
   
}
const max = getmaax(height);
console.log("maxx valuee is",max);