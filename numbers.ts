import {compact} from 'lodash';


const nums = [0, 2, 3, 66, 95, 100];
console.log('Starting numbers', nums);

const evenNums = nums.filter((num) => {
   return num % 2 == 0;
});

console.log('Final numbers', evenNums);




const evenNums2: number[] = [];

nums.forEach((num) => {
    if (num % 2 == 0) {
        return evenNums2.push(num);
    }

})


console.log('Final numbers', evenNums2);

const evenNums3 = nums.map((num) => {
    if (num % 2 ==0) {
        return num;
    }
})
console.log(compact(evenNums3));
