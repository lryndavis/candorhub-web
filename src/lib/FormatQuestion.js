export function formatQuestion(question) {
  let modifiedQuestion = question;
  if (question.charAt(question.length - 1) !== '?') {
    modifiedQuestion = modifiedQuestion + "?";
  }
  let result = modifiedQuestion.replace("painting", "artwork");
  return result;
}
