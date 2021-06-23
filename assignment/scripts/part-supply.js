console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40
let partsNeeded = 40;

//    & console.log the variable
console.log('1. Number of partsNeeded:', partsNeeded);

// 2. Create a variable call 'supplyChanges' set it to an array containing
let supplyChanges = [3, 5, -6, 0, 7, 11]
//    the following numbers: 3, 5, -6, 0, 7, 11
console.log('2. Array of supplyChanges:', supplyChanges);

// 3. Console log the value of 'supplyChanges' at index 2
console.log('3. Item at index 2 is:', supplyChanges[2]);


// 4. The last item was added by mistake. Remove it from the 'supplyChanges'
//    array & console.log the value removed.
let removeLastItem = supplyChanges.pop()
console.log('4. Removed item:', removeLastItem);

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
 supplyChanges.push(25)
console.log('5. Adding 25 to supplyChanges.',supplyChanges);

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.'
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.'
console.log('6. Showing supplyChanges...');
for(let i=0; i< supplyChanges.length; i++){
  // console.log(supplyChanges[i])
let x = 0;
  if(supplyChanges[i]> 0){
     x = supplyChanges[i]
    console.log(`added ${x} parts`)
  }else if(supplyChanges[i] === 0){
    x = supplyChanges[i]
    console.log(`No ${x} changes`)
  }else if(supplyChanges[i] < 0){
    x = supplyChanges[i];
    console.log(`Removed ${x} parts`)
  }
}


// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop.
console.log('7. Showing supplyChanges with "for of" loop');
for(let i of supplyChanges){
  if(i > 0){
     console.log(`added ${i} parts`)
  }else if( i === 0){
    console.log(`No ${i} changes`)
  }else if(i < 0){
    console.log(`Removed ${i} parts`)
  }
}

// 8. Rewrite the `for` loop from #6 as a `while` loop.
console.log('8. Showing supplyChanges with "while" loop');


// 9. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.

let i =0;
while(i <= supplyChanges.length){
  i = supplyChanges[0] + supplyChanges[1]+ supplyChanges[2]+ supplyChanges[3]+supplyChanges[4] +supplyChanges[5]
  console.log('9. Total supplies available is:', i);
}
///Do while 
do{
  s = supplyChanges[0] + supplyChanges[1]+ supplyChanges[2]+ supplyChanges[3]+supplyChanges[4] +supplyChanges[5]
  console.log('9. Total supplies available is:', s);
}while(s <= supplyChanges.length)
