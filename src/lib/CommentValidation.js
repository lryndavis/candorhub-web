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
    .replace(/\ {2,}/g, ' ')
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
