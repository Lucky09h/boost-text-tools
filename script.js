// WORD COUNTER
document.getElementById("wordInput").addEventListener("input", () => {
  const text = document.getElementById("wordInput").value.trim();
  const wordCount = text === "" ? 0 : text.split(/\s+/).length;
  document.getElementById("wordCount").textContent = wordCount;
});

// CHARACTER COUNTER
document.getElementById("charInput").addEventListener("input", () => {
  const charCount = document.getElementById("charInput").value.length;
  document.getElementById("charCount").textContent = charCount;
});

// READING TIME ESTIMATOR
document.getElementById("readingInput").addEventListener("input", () => {
  const words = document.getElementById("readingInput").value.trim().split(/\s+/).length;
  const readingTime = Math.ceil(words / 200); // average reading speed
  document.getElementById("readingTime").textContent = `${readingTime} min`;
});

// KEYWORD DENSITY CHECKER
function analyzeKeywords() {
  const text = document.getElementById("keywordInput").value.toLowerCase();
  const words = text.match(/\b\w+\b/g);
  const freq = {};
  if (!words) return;

  words.forEach(word => {
    freq[word] = (freq[word] || 0) + 1;
  });

  let result = "<ul>";
  const totalWords = words.length;

  Object.keys(freq).sort((a, b) => freq[b] - freq[a]).forEach(word => {
    const density = ((freq[word] / totalWords) * 100).toFixed(2);
    result += `<li>${word}: ${freq[word]} (${density}%)</li>`;
  });

  result += "</ul>";
  document.getElementById("keywordResults").innerHTML = result;
}

// HASHTAG GENERATOR
function generateHashtags() {
  const input = document.getElementById("hashtagInput").value.trim();
  const keywords = input.split(/\s+/);
  const hashtags = keywords.map(k => `#${k.replace(/[^a-zA-Z0-9]/g, '')}`);
  document.getElementById("hashtags").textContent = hashtags.join(" ");
}

// CASE CONVERTER
function toUpper() {
  const val = document.getElementById("caseInput").value;
  document.getElementById("caseInput").value = val.toUpperCase();
}
function toLower() {
  const val = document.getElementById("caseInput").value;
  document.getElementById("caseInput").value = val.toLowerCase();
}

// LINE COUNTER
document.getElementById("lineInput").addEventListener("input", () => {
  const lines = document.getElementById("lineInput").value.split(/\n/);
  document.getElementById("lineCount").textContent = lines.length;
});

// REMOVE EXTRA SPACES
function removeSpaces() {
  const text = document.getElementById("spaceInput").value;
  const cleaned = text.replace(/\s+/g, " ").trim();
  document.getElementById("spaceInput").value = cleaned;
}

// META TAG GENERATOR
function generateMetaTags() {
  const title = document.getElementById("metaTitle").value;
  const desc = document.getElementById("metaDesc").value;
  const output = `
<meta name="title" content="${title}">
<meta name="description" content="${desc}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${desc}">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${desc}">
  `;
  document.getElementById("metaOutput").textContent = output.trim();
}

// PRIVACY POLICY GENERATOR
function generatePrivacy() {
  const site = document.getElementById("siteName").value;
  const email = document.getElementById("email").value;
  const policy = `
<b>Privacy Policy for ${site}</b>

At ${site}, accessible from your website URL, one of our main priorities is the privacy of our visitors...

If you have questions, contact us at ${email}.
  `;
  document.getElementById("privacyOutput").textContent = policy.trim();
}
