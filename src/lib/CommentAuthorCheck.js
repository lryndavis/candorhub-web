export function authorInComments(image, id) {
  if (image.questions) {
    for (var i = 0; i < image.questions.length; i++) {
      if (image.questions[i].comments) {
        for (var j = 0; j < image.questions[i].comments.length; j++) {
          var comment = image.questions[i].comments[j];
          if (comment.user) {
            if (comment.user.id === id) {
              return true;
            }
          }
        }
      }
    }
  }
  return false;
}
