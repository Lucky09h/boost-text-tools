// Word Count
const wordInput = document.getElementById('wordInput');
const wordCount = document.getElementById('wordCount');
const charCount = document.getElementById('charCount');

if (wordInput) {
  wordInput.addEventListener('input', () => {
    const text = wordInput.value.trim();
    wordCount.textContent = text === '' ? 0 : text.split(/\s+/).length;
    charCount.textContent = text.length;
  });
}

// Remove Extra Spaces
function removeSpaces() {
  const input = document.getElementById('spaceInput');
  input.value = input.value.replace(/\s+/g, ' ').trim();
}

// Convert to Lowercase
function toLowerCaseText() {
  const input = document.getElementById('caseInput');
  input.value = input.value.toLowerCase();
}

// Convert to Uppercase
function toUpperCaseText() {
  const input = document.getElementById('caseInput');
  input.value = input.value.toUpperCase();
}

// Remove Line Breaks
function removeLineBreaks() {
  const input = document.getElementById('lineInput');
  input.value = input.value.replace(/[\r\n]+/g, ' ');
}
