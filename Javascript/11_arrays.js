// let num = [1,2,3,4,5,6,7,8,9];
// console.log(num);
// console.log(num.length);

// console.log("---------------------------------------------------------------------");

// let b = num.toString();
// console.log(b);

// console.log("---------------------------------------------------------------------");

// let c = num.join("_");//! If we change "_" with anything it will be in the middle of two elements of arrray 
// console.log(c);

// console.log("---------------------------------------------------------------------");

// let d = num.pop();      //! Stores popped element
// console.log(num);       
// console.log(d);

// console.log("---------------------------------------------------------------------");

// let e = num.push(0);    //! Stores length of updated array ( with the new added element )
// console.log(num);       
// console.log(e);

// console.log("---------------------------------------------------------------------");

// let f = num.shift();    //! shift() --> Removes first element from array and return it
// console.log(num);
// console.log(f);

// console.log("---------------------------------------------------------------------");

// let g = num.unshift(99);   //! unshift() --> Adds new element to array and return the new array length.
// console.log(num);
// console.log(g);

// console.log("---------------------------------------------------------------------");

// let a = [10,20,30,40,50,60,70,80,90,100];
// console.log(a);
// console.log(a.length);

// console.log("---------------------------------------------------------------------");

// let h = delete a[5];     //todo: IMP :  delete() --> it deletes the element , returns BOOL value and leaves that space empty in array. So even if any array has 10 element and we delete any one element , we'll get the length of array as 10 only.
// console.log(h);
// console.log(a);
// console.log(a.length);

// console.log("---------------------------------------------------------------------");

// let x = [1,2,3];
// let y = [4,5,6];
// let z = [7,8,9];

// let w = x.concat(y,z);
// console.log(w);

// console.log("---------------------------------------------------------------------");

// let arr = [1,30,45,100,66,2000];
// arr.sort();
// console.log(arr);     //! SORT function sorts in LEXICOGRAPHIC ORDER.(The dictionary order)
// //! Ex --> 30 , 2000 --> it will compare one by one digit. 3 > 2, So 2000 then 30 is sorted.

// //* So to sort in ascending order ---> 
// let compare = (a,b)=>{
//     return a-b;
// }
// arr.sort(compare);
// console.log(arr);

// console.log("---------------------------------------------------------------------");

// let array = [1,2,3,4,5,6,7,8,9];
// //! FORMAT --> splice(index at which numbers are to be added , how many numbers to remove , what new numbers are to be added);
// array.splice(1 , 3 , 997,998,999);      
// console.log(array);

console.log("---------------------------------------------------------------------");

let n = [1,2,3,4,5,6,7,8,9];
console.log(n.slice(3,7));      //! slice(a,b) -- > array is sliced from including a and excluding b. FORMAT --> [a,b).

 