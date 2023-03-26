function fizzBuzz(numbers) {
    let result = "";
    
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
        result += "fizzbuzz";
      } else if (numbers[i] % 3 === 0) {
        result += "fizz";
      } else if (numbers[i] % 5 === 0) {
        result += "buzz";
      }
    }
    
    return result;
  }

  console.log(fizzBuzz([1, 3, 5, 9, 11, 12, 20])); 
  console.log(fizzBuzz([1, 2, 4, 8, 11])); 


  function countVowels(str) {
    let count = 0;
    str = str.toLowerCase();
    
    for (let i = 0; i < str.length; i++) {
     
      if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
        count++;
      }
    }
    
    return count;
  }

console.log(countVowels('Hi There!')); 
console.log(countVowels('Why do you ask?')); 
console.log(countVowels('Why?'));

const data = [];
fetch('https://jsonplaceholder.typicode.com/todos')
  .then((response) => {
    return response.json();
   })
  .then((data) => {
    console.log(data);
    return data;
    
  })
  .catch((error) => {
    console.error('Something went wrong', error);
  });

