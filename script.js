document.addEventListener('DOMContentLoaded', () => {
  // Word & Character Counter
  const wordInput = document.getElementById('wordInput');
  const wordCount = document.getElementById('wordCount');
  const charCount = document.getElementById('charCount');
  if (wordInput) {
    wordInput.addEventListener('input', () => {
      const text = wordInput.value.trim();
      wordCount.textContent = text ? text.split(/\s+/).length : 0;
      charCount.textContent = text.length;
    });
  }

  // Remove Extra Spaces
  document.getElementById('spaceInput').oninput = () => {
    const input = document.getElementById('spaceInput');
    input.value = input.value.replace(/\s+/g, ' ').trim();
  };

  // Case Converter
  document.querySelector('button[onclick="toLowerCaseText()"]').onclick = () => document.getElementById('caseInput').value = document.getElementById('caseInput').value.toLowerCase();
  document.querySelector('button[onclick="toUpperCaseText()"]').onclick = () => document.getElementById('caseInput').value = document.getElementById('caseInput').value.toUpperCase();

  // Remove Line Breaks
  document.querySelector('button[onclick="removeLineBreaks()"]').onclick = () => {
    const input = document.getElementById('lineInput');
    input.value = input.value.replace(/[\r\n]+/g, ' ');
  };

  // Meta Tag Generator
  document.querySelector('button[onclick="generateMetaTags()"]').onclick = () => {
    const t=document.getElementById('metaTitle').value.trim();
    const d=document.getElementById('metaDescription').value.trim();
    document.getElementById('metaOutput').textContent = t && d 
      ? `<meta name="title" content="${t}">\n<meta name="description" content="${d}">`
      : "Please enter both title and description.";
  };

  // Keyword Density
  document.querySelector('button[onclick="checkKeywordDensity()"]').onclick = () => {
    const text = document.getElementById('densityInput').value.toLowerCase().replace(/[^a-z\s]/g, '');
    const freq = {}, words = text.split(/\s+/).filter(Boolean);
    words.forEach(w => freq[w] = (freq[w] || 0) + 1);
    const output = Object.entries(freq).sort((a,b)=>b[1]-a[1]).map(e=>`${e[0]}: ${e[1]} (${((e[1]/words.length)*100).toFixed(2)}%)`).join('\n');
    document.getElementById('densityOutput').textContent = output;
  };

  // Slug Generator
  document.querySelector('button[onclick="generateSlug()"]').onclick = () => {
    const title = document.getElementById('slugInput').value.trim();
    document.getElementById('slugOutput').textContent = title.toLowerCase().replace(/[^a-z0-9\s]/g,'').replace(/\s+/g,'-');
  };

  // HTML Entities
  document.querySelector('button[onclick="convertToEntities()"]').onclick = () => {
    const s = document.getElementById('htmlInput').value;
    document.getElementById('htmlOutput').textContent = Array.from(s).map(c => `&#${c.charCodeAt(0)};`).join('');
  };

  // ASCII Converter
  document.querySelector('button[onclick="convertToAscii()"]').onclick = () => {
    const s = document.getElementById('asciiInput').value;
    document.getElementById('asciiOutput').textContent = Array.from(s).map(c => c.charCodeAt(0)).join(' ');
  };

  // JSON Formatter
  document.querySelector('button[onclick="formatJson()"]').onclick = () => {
    try {
      const obj = JSON.parse(document.getElementById('jsonInput').value);
      document.getElementById('jsonOutput').textContent = JSON.stringify(obj, null, 2);
    } catch (e) {
      document.getElementById('jsonOutput').textContent = 'Invalid JSON';
    }
  };

  // Base64 Encoder/Decoder
  document.querySelector('button[onclick="encodeBase64()"]').onclick = () => document.getElementById('base64Output').textContent = btoa(document.getElementById('base64Input').value);
  document.querySelector('button[onclick="decodeBase64()"]').onclick = () => document.getElementById('base64Output').textContent = atob(document.getElementById('base64Input').value);

  // Text Reverser
  document.querySelector('button[onclick="reverseText()"]').onclick = () => {
    const s = document.getElementById('reverseInput').value;
    document.getElementById('reverseOutput').textContent = s.split('').reverse().join('');
  };
});
