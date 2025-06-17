 let i = [20, 30, 40, 50]
 console.log(i[0]);

 // [1,2,"TS", "JS", true] - // [key:value] // index starts with 0 in an TS

 // [0:1, 1:2, 2:.....]

 // Using array Literal

 // Syntax:

 // let arrayName : datatype[](optional) = [value, value1,....]

 let array :(number | string)[] = [1,2,4,5,6, "TS"]

  let array1 :any= [1,2,4,5,6, "TS"]

  let array2 = [1,2,4,5,6, "TS"] // Type inference

  let array3 =  [1,2,4,5,6, "TS", null, true, undefined]


  // There are 2 ways in which we can get the data from array
  // 1. Using index - [index]

  console.log(array3[0])
  console.log(array3[1])
  console.log(array3[2])

  // using loop

  // length - Is a property in an array which return the total number of elements in an array
  // arrayName.length
  console.log(array3.length);

  // Tradition for loop

  for(let i=0; i<array3.length; i++){
    console.log(array3[i]);
  }
console.log("*********************************");

  // for of loop - 
  // Syntax:-
  // for (variable of arrayName) {....}
  // variable - It will get the array value one by one
  for(let element of array3){
        console.log(element);
  }


  let array4 :any = [1,2]
  //1. push(element) - Add the element to the end of an array
  // Syntax:-
  //arrayname.push(Element, ele1,....)
  array4.push("TS", "JS")
  console.log(array4);

  // 2. unshift(element .....) - Add the element to the beginning of an array
  // Syntax:-
  // arrayname.unshift(element, ele1,....)
  array4.unshift("Java", "Blue")
  console.log(array4);


  // 3. pop() - Removes the last element from an array
  // Syntax:-
  // arrayname.pop()
  array4.pop()
  console.log(array4);


  // 4. shift() - Removes the first element from an array
  // Syntax:-
  // arrayname.shift()
  array4.shift()
  console.log(array4);

  // [ 'Blue', 1, 2, 'TS' ]
  // [ 'Blue', 1, 'Python', 'Ruby', 'TS' ]

  // 5. splice(startIndex, numberOfElementToDelete, ele1, ele2, ele3....)
  // Syntax:-
  // arrayname.splice(startIndex, numberOfElementToDelete, ele1, ele2, ele3)
  // startIndex - The position where you want to add the element
  // numberOfElementToDelete - The number of elements you want to delete at the startIndex
  array4.splice(2, 0, "Python", "Ruby")
  console.log(array4);

  let array5 = [10,20,30,40,50,60,70]

  //6. slice(startIndex, endIndex) - Return the portion of an array
  // Syntax:-
  // arrayname.slice(startIndex, endIndex)
  // startIndex - The starting index of the portion of the array
  // endIndex(Exclusive) - The ending index of the portion of the array
  console.log(array5.slice(2, 5))

