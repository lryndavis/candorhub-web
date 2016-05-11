import { Sentimental } from 'Sentimental';
import { positivity, negativity, analyze } from 'Sentimental';

const offensiveWordThreshold = 4;
const nonConstructiveLanguageThreshold = -0.5;
const minimumCommentLength = 10;
const maximumCommentLength = 100;

export function isCorrectLength(commentText) {
  return (commentText.trim().length >= minimumCommentLength && commentText.trim().length <= maximumCommentLength);
}

export function doesNotUseOffensiveLanguage(commentText) {
  var noPunctuation = commentText
    .replace(/[^a-zA-Z ]+/g, ' ')
    .replace('/ {2,}/',' ');
  var tokens = noPunctuation.toLowerCase().split(" ");
  for (var i = 0; i < tokens.length; i++) {
    if (negativity(tokens[i]).score >= offensiveWordThreshold) {
      return false;
    }
  }
  return true;
}

export function usesConstructiveLanguage(commentText) {
  return analyze(commentText).comparative > nonConstructiveLanguageThreshold;
}

export function isValidComment(commentText) {
  return doesNotUseOffensiveLanguage(commentText) && usesConstructiveLanguage(commentText) &&
  isCorrectLength(commentText);
}
