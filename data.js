function analyzeSentence(sentence) {
    // Initialize counters
    let charCount = 0;
    let wordCount = 0;
    let vowelCount = 0;
  
    // Read the sentence character by character
    for (let i = 0; i < sentence.length; i++) {
      charCount++; // Increment character counter
  
      // Check if current character is a word separator
      if (sentence[i] === ' ') {
        wordCount++; // Increment word counter
      }
  
      // Check if current character is a vowel
      if (
        sentence[i] === 'a' ||
        sentence[i] === 'e' ||
        sentence[i] === 'i' ||
        sentence[i] === 'o' ||
        sentence[i] === 'u'
      ) {
        vowelCount++; // Increment vowel counter
      }
    }
  
    // Subtract 1 from word count to exclude the trailing space
    wordCount--;
  
    // Return the results
    return `Sentence length: ${charCount}\nWord count: ${wordCount}\nVowel count: ${vowelCount}`;
  }
  
  // Test the function
  console.log(analyzeSentence("This is a test sentence."));