const num = [1,2,3,4,5,6];
num.push(12,13);

console.log(num);
console.log(num.includes(1));
console.log(num.indexOf(1));
console.log(Array.isArray(num));
console.log(Array.isArray('fahadd'));

num.pop(12,13);
console.log(num);