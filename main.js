console.log('Task 6');
let user = 'John Doe';
console.log(user);

let student = 'Eryka';
console.log(student);
/*The 'user' declaration has the value of the 'student' declaration. But if it was "const" am error would occur*/
user = student;
console.log(user);

let test = 1 + '1';
/*I thought that the result would be "2". But "1" is a number and '1' is a string. They connect*/
console.log(test);
test = 1 - 1;
/*Result will be "0"*/
console.log(test);
console.log('Task 7');
test = true;
console.log(test);

console.log('Task 8');
let result = '';
let array = [2, 3, 5, 8];
for (let i = 0; i < array.length; i++) {
  result = result *= array[i];
}
console.log(result);

console.log('Task 9');
array = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i <array.length; i++){
  if (array[i] > 5 && array[i] < 10) {
    console.log(array[i]);
  }
}

console.log('Task 10');
array = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i<array.length; i++){
  if (i % 2 === 0){
    console.log(array[i]);
  }
}






