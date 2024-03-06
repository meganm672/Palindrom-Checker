const checkButton = document.getElementById('check-btn');
const textInput = document.getElementById('text-input')
const result = document.getElementById('result');

checkButton.addEventListener('click', () => {
  const inputValue = textInput.value.trim().toLowerCase()
  if(inputValue === ''){
    alert('Please input a value');
    return;
  }

   if (isPalindrome(inputValue)) {
        result.textContent = inputValue + ' is a palindrome';
    } else {
        result.textContent = inputValue + ' is not a palindrome';
    }
})

function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
   const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '')
    // Reverse the string
   const reversedStr = cleanStr.split('').reverse().join('');
    // Check if the original and reversed strings are equal
    return cleanStr === reversedStr;
}