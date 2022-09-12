// function sayHello(){
//   alert('Hello!')
// }

// sayHello()
// sayHello()
// sayHello()

// function sayHi(){
//   return "Hello World!";
// }

// alert(sayHi());


// function sayHi(){
//  const  res = 12 + 3;
//   return res;
// }
// const finalResult = sayHi();
// console.log(finalResult);



function isFieldEmpty(){
  const field = document.querySelector("#info");
  if (!field.value){
    return true;
  } else {
    return false;
  }
}

const fieldTest = isFieldEmpty();

if (fieldTest){
  console.log("Field is empty!")
} else{
  console.log("Field is NOT empty!")
}