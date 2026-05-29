const passwordOutput = document.getElementById("passwordOutput");
const copyBtn = document.getElementById("copyBtn");
const lengthRange = document.getElementById("lengthRange");
const lengthValue = document.getElementById("lengthValue");

const lowercaseCheckbox = document.getElementById("lowercase");
const uppercaseCheckbox = document.getElementById("uppercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");

const generateBtn = document.getElementById("generateBtn");

const LOWERCASE_CHARS = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBER_CHARS = "0123456789";
const SYMBOL_CHARS = "!@#$%^&*()_+-=[]{};:,.<>/?";

lengthValue.textContent = lengthRange.value;

lengthRange.addEventListener("input", () => {
  lengthValue.textContent = lengthRange.value;
});

generateBtn.addEventListener("click", () => {
  const length = parseInt(lengthRange.value, 10);

  if (length < 3) {
    passwordOutput.value = "Length must be at least 3";
    return;
  }

  let pool = "";
  if (lowercaseCheckbox.checked) pool += LOWERCASE_CHARS;
  if (uppercaseCheckbox.checked) pool += UPPERCASE_CHARS;
  if (numbersCheckbox.checked) pool += NUMBER_CHARS;
  if (symbolsCheckbox.checked) pool += SYMBOL_CHARS;

  if (!pool) {
    passwordOutput.value = "Select at least one option";
    return;
  }

  // first 3 lowercase letters ---
  let password = "";
  for (let i = 0; i < 3; i++) {
    const index = Math.floor(Math.random() * LOWERCASE_CHARS.length);
    password += LOWERCASE_CHARS[index];
  }

  // Remaining characters ---
  for (let i = 3; i < length; i++) {
    const index = Math.floor(Math.random() * pool.length);
    password += pool[index];
  }

  passwordOutput.value = password;
});


copyBtn.addEventListener("click", async () => {
  const value = passwordOutput.value.trim();
  if (!value || value === "Select at least one option") return;

  try {
    await navigator.clipboard.writeText(value);
    copyBtn.textContent = "Copied!";
    setTimeout(() => (copyBtn.textContent = "Copy"), 1200);
  } catch (err) {
    console.error("Copy failed", err);
  }
});
