import {
  doesNotUseOffensiveLanguage,
  usesConstructiveLanguage,
  isCorrectLength,
  isValidComment} from '../../src/lib/CommentValidation';
import {expect} from 'chai';

describe("CommentValidation", () => {

  describe("isCorrectLength", () => {
    it("rejects comments that are too short", () => {
      let commentText = "Hello";
      expect(isCorrectLength(commentText)).to.be.false;
      expect(isValidComment(commentText)).to.be.false;
    });

    it("rejects comments that are too long", () => {
      let commentText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Videamus animi partes, quarum est conspectus illustrior; Heri, inquam, ludis commissis ex urbe profectus veni ad vesperum. Nonne videmus quanta perturbatio rerum omnium consequatur, quanta confusio? An est aliquid, quod te sua sponte delectet? Istam voluptatem perpetuam quis potest praestare sapienti? Duo Reges: constructio interrete. Eam tum adesse, cum dolor omnis absit; Memini vero, inquam; Est autem officium, quod ita factum est, ut eius facti probabilis ratio reddi possit. Ut aliquid scire se gaudeant? Cum autem venissemus in Academiae non sine causa nobilitata spatia, solitudo erat ea, quam volueramus. Primum quid tu dicis breve? Quo plebiscito decreta a senatu est consuli quaestio Cn. Et quod est munus, quod opus sapientiae? Ne tum quidem te respicies et cogitabis sibi quemque natum esse et suis voluptatibus? Quae hic rei publicae vulnera inponebat, eadem ille sanabat.";
      expect(isCorrectLength(commentText)).to.be.false;
      expect(isValidComment(commentText)).to.be.false;
    });

    it("allows comments that are appropriate length", () => {
      let commentText = "This art is terrible and I question your competence.";
      expect(isCorrectLength(commentText)).to.be.true;
      expect(isValidComment(commentText)).to.be.true;
    });
  });

  describe("doesNotUseOffensiveLanguage", () => {
    it("rejects offensive words", () => {
      let offensiveWords = ["asshole", "bastard", "scumbag", "cocksucker", "dickhead"];
      offensiveWords.forEach(((word) =>
        expect(doesNotUseOffensiveLanguage(word)).to.be.false
      ));
    });

    it("rejects comments that use offensive words", () => {
      let commentText = "You are a real scumbag";
      expect(doesNotUseOffensiveLanguage(commentText)).to.be.false;
    });

    it("allows comments that do not use offensive words", () => {
      let commentText = "This art is terrible and I question your competence.";
      expect(doesNotUseOffensiveLanguage(commentText)).to.be.true;
      expect(isValidComment(commentText)).to.be.true;
    });
  });

  describe("usesConstructiveLanguage", () => {
    it("rejects comments that are just strings of highly negative words", () => {
      let commentText = "This art is terrible, horrible, awful, foolish, moronic, and bad.";
      expect(usesConstructiveLanguage(commentText)).to.be.false;
      expect(isValidComment(commentText)).to.be.false;
    });

    it("allows comments that are harsh but fair", () => {
      let commentText = "This art has bad lines and an ugly, garish color scheme.";
      expect(usesConstructiveLanguage(commentText)).to.be.true;
      expect(isValidComment(commentText)).to.be.true;
    });

    it("recognizes negation of negative words", () => {
      let commentText = "This art isn't bad. Not terrible, not horrible, not awful, not foolish, and not moronic."
      expect(usesConstructiveLanguage(commentText)).to.be.true;
    });

    it("recognizes negation of positive words", () => {
      let commentText = "This art isn't good. It isn't awesome."
      expect(usesConstructiveLanguage(commentText)).to.be.false;
    });
  });
});
