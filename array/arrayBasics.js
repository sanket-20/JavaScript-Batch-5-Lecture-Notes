var arr = [1, 2.5, true, "sanket", 55];
console.log(arr);

// how to change the value of index
arr[3] = "SITH";
console.log(arr);

// how to access specific value/item
// console.log(arr[0]);
// console.log(arr[4]);


// how to iterate arr value
// for(var i=0; i<5; i++)
// {
//     console.log(arr[i]);
// }

// for (index in arr)
// {
//     console.log(index);
// }

// for (value of arr)
// {
//     console.log(value);
// }

// arr.forEach((value, index)=>{
//     console.log(`${index} : ${value}`);
// })

// for(var i=0; i< arr.length ; i++)
// {
//     console.log(arr[i]);
// }

// array methods

var num  = [2, 3.14, 11, true];
console.log(num);

// add value from end
num.push(34, 55);
console.log(num);

// add value from start
num.unshift(99, 89);
console.log(num);


// remove value from end
num.pop();
console.log(num);

// remove value from start
num.shift();
num.shift();
console.log(num);

// splice(start_index, delete_count, new_value)

// num.splice(0, 2);
num.splice(2, 1);
num.splice(2, 1);
console.log(num);

num.push(77, 80, 33, true);

console.log(num);
num.splice(-1, 1);
console.log(num);

num.splice(2,0, true, 99);
console.log(num);

num[15] = 66;
console.log(num);


num[10] = "Aditya";
console.log(num);


num.splice(8, 2);
console.log(num);


num.unshift(66);
console.log(num);
console.log(num.indexOf(66));
console.log(num.lastIndexOf(66));


num.unshift(101, 11);
console.log(num);

num.sort((a,b)=> {
    return a-b;
});
console.log(num);

// num.sort((a,b)=> {
//     return b-a;
// });
// console.log(num);

num.reverse();
console.log(num);








