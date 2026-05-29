const passwordOutput = document.getElementById('passwordOutput');
const generateBtn = document.getElementById('generateBtn');
const clearBtn = document.getElementById('clearBtn');
const copyBtn = document.getElementById('copyBtn');

const lengthRange = document.getElementById('lengthRange');
const lengthValue = document.getElementById('lengthValue');
const lowercaseCheck = document.getElementById('lowercase');
const uppercaseCheck = document.getElementById('uppercase');
const numbersCheck = document.getElementById('numbers');
const symbolsCheck = document.getElementById('symbols');

lengthRange.addEventListener('input', (e) => {
  lengthValue.textContent = e.target.value;
});

const chars = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+~`|}{[]:;?><,./-='
};

generateBtn.addEventListener('click', () => {
  let allowedChars = '';
  if (lowercaseCheck.checked) allowedChars += chars.lowercase;
  if (uppercaseCheck.checked) allowedChars += chars.uppercase;
  if (numbersCheck.checked) allowedChars += chars.numbers;
  if (symbolsCheck.checked) allowedChars += chars.symbols;

  if (allowedChars === '') {
    alert('Please select at least one character type!');
    return;
  }

  let password = '';
  const length = parseInt(lengthRange.value);
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  passwordOutput.value = password;
});

clearBtn.addEventListener('click', () => {
  passwordOutput.value = '';
  lengthRange.value = 12;
  lengthValue.textContent = 12;
  lowercaseCheck.checked = true;
  uppercaseCheck.checked = true;
  numbersCheck.checked = true;
  symbolsCheck.checked = false;
  copyBtn.textContent = 'Copy Password';
});

copyBtn.addEventListener('click', async () => {
  if (!passwordOutput.value) {
    alert('Generate a password first!');
    return;
  }

  try {
    await navigator.clipboard.writeText(passwordOutput.value);
    copyBtn.textContent = 'Copied! ✅';
    setTimeout(() => {
      copyBtn.textContent = 'Copy Password';
    }, 2000);
  } catch (err) {
    alert('Failed to copy password.');
  }
});
