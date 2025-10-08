// Q1. Find Minimum Value
let arr =  [10,5,4,6,2,9,7,100]
let min = arr[0]

for(i = 0; i< arr.length ; i++){
if(arr[i]< min){
    min = arr[i]
}

}
console.log("min Number", min)



// Q2 .Find the Sum of All Elements
let arr2 =  [2, 4, 6,8]
let sum = 0

for(i = 0 ; i<arr2.length ; i++){

sum += arr2[i]

}
console.log("sum of all elements", sum)


// Q3. Find the Average of Array Elements
let arr3 =  [1, 2, 3, 4]
let avg = 0
let sumOfarr3 = 0

for(i = 0; i<arr3.length ; i++){

sumOfarr3 += arr3[i] 

avg = sumOfarr3 /arr3.length

}

console.log("avg", avg)

// Q4. Count Even and Odd Numbers
let arr4 = [1,2,3,4,5,6]
// // WITH THE HELP OF PREMADE FUNCTIONS
// const even = arr4.filter(num => num%2 ==0)
// const odd = arr4.filter(num => num%2 ==1)

// BUT DOING IT YOURSELF Q4 
let even = []
let evenIndex = 0
let odd = []
let oddIndex = 0

for(i=0 ; i<arr4.length ; i++){
if(arr4[i] %2 ==1 ){
    odd[oddIndex] = arr4[i]
    oddIndex++
}else{
    even[evenIndex] = arr4[i]
    evenIndex++
}

}

console.log("even", even);
console.log("odd", odd);



// Q5.Reverse an Array Without .reverse()
let arr5 = [0,1,2,3,4]
let newArr = []

for(i = 0 ; i< arr5.length ;i++){
newArr[i] = arr5[arr5.length -1 -i ]  // 4-1-0 , 4-1-1 , 4-1-2 ,4-1-3 ,4-1-4

}

console.log("newArr", newArr);



// Q6 . Find the Second Largest Element
let arr6= [880, 5, 8, 200 ,99]
let largest=-Infinity
let secondLargest=-Infinity

for(i=0 ; i<arr6.length ; i++){
    if(arr6[i ]> largest){

        largest=arr6[i]
    }
    
    if(arr6[i] >secondLargest && arr6[i] < largest){
        secondLargest = arr6[i]
    }

}
console.log("largest", largest);
console.log("secondLargest", secondLargest);

// test
