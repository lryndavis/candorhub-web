// This import syntax is necessary to avoid problems with Babel
var retext = require('retext');
var sentiment = require('retext-sentiment');

const offensiveWordThreshold = -4;
const nonConstructiveLanguageThreshold = -0.5;
const minimumCommentLength = 10;
const maximumCommentLength = 100;

function tokenize(text) {
  return text
    .replace(/[^a-zA-Z ]+/g, ' ')
    .replace('/ {2,}/',' ')
    .toLowerCase()
    .split(' ');
}

export function isCorrectLength(commentText) {
  return (commentText.trim().length >= minimumCommentLength &&
    commentText.trim().length <= maximumCommentLength);
}

export function doesNotUseOffensiveLanguage(commentText) {
  let result = true;
  let tokenizedText = tokenize(commentText);
  tokenizedText.forEach((token) => retext().use(sentiment).use(() => (node) => {
      if (node.children.length && node.data.polarity) {
        if (node.data.polarity <= offensiveWordThreshold) {
          console.log("OFFENSIVE WORD DETECTED: " + node.children[0].children[0].children[0].children[0].value);
          result = false;
        }
      }
    }
  ).process(token));
  return result;
}

export function usesConstructiveLanguage(commentText) {
  let result = true;
  let length = tokenize(commentText).length;
  retext().use(sentiment).use(() => (node) => {
    if (node.children.length) {
      console.log("VALENCE:" + node.data.valence);
      console.log("POLARITY: " + node.data.polarity);
      console.log("POLARITY / LENGTH: " + node.data.polarity / length);
      if ((node.data.polarity / length) <= nonConstructiveLanguageThreshold) {
        result = false;
      }
    }
  }).process(commentText);
  return result;
}

export function isValidComment(commentText) {
  return isCorrectLength(commentText) && doesNotUseOffensiveLanguage(commentText) && usesConstructiveLanguage(commentText);
}
