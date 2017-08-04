
// This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.:
  // `module.exports = ClozeCard;`

  // The constructor should accept two arguments: `text` and `cloze`.

  // The constructed object should have a `cloze` property that contains _only_ the cloze-deleted portion of the text.

  // The constructed object should have a `partial` property that contains _only_ the partial text.

  // The constructed object should have a `fullText` property that contains _only_ the full text.

  // The constructor should throw or log an error when the cloze deletion does _not_ appear in the input text.

  // Use prototypes to attach these methods, wherever possible.

  //console.log('this is loaded');
  
// Constructor function for the 'Cloze Card'.
function ClozeCard(fullText, cloze) {
    this.fullText = fullText; 
    this.cloze = cloze;
    this.partial = fullText.replace(cloze, "...");
  if (!fullText.includes(cloze)) {
		console.log('ERROR: the word(s) <'+ cloze +'> does not appear within full text.');
    }
  

};
//console.log(clozeCard.fullText);
//console.log(clozeCard.cloze);
//console.log(clozeCard.partial);
//
  module.exports = ClozeCard;

  