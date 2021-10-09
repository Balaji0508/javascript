//continue statement
let arr=[1,2,3,4,5,6,7];
for(let i=0;i<arr.length;i++){
    if(i==4){
        continue;
    }
    console.log(arr[i]);
}

//break statment;
let arr=[1,2,3,4,5,6,7];
for(let i=0;i<arr.length;i++){
    if(i==3){
        break;
    }
    console.log(arr[i]);
}

//pop():
let arr=["apple","mango",75,null,true,34,"hello"];
console.log(arr.length);
arr.pop(); // last element will be removed;
console.log(arr);

//push():
let arr=["apple","mango",75,null,true,34,"hello"];
console.log(arr.length);
arr.push("world"); // element will be added to the array;
console.log(arr);

//shift():
let arr=["apple","mango",75,null,true,34,"hello"];
console.log(arr.length);
arr.shift(); // it's removes the first element of array;
console.log(arr);
