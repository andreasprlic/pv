function compareColor(lhs, rhs) {
  strictEqual(lhs[0], rhs[0]);
  strictEqual(lhs[1], rhs[1]);
  strictEqual(lhs[2], rhs[2]);
}
test("force rgb from hex triplet", function() {
  var red = [1.0, 0.0, 0.0];
  compareColor([1.0, 0.0, 0.0], forceRGB('#f00'));
  compareColor([1.0, 0.0, 0.0], forceRGB('#ff0000'));
  compareColor([1.0, 1.0, 0.0], forceRGB('#ff0'));
  compareColor([1.0, 1.0, 0.0], forceRGB('#ffff00'));
});

test("force rgb from rgb", function() {
  var red = [1.0, 0.0, 0.0];
  compareColor([1.0, 0.0, 0.0], forceRGB([1.0, 0.0, 0.0]));
  compareColor([1.0, 1.0, 0.0], forceRGB([1.0, 1.0, 0.0]));
});

test("force rgb from color names", function() {
  var red = [1.0, 0.0, 0.0];
  compareColor([1.0, 0.0, 0.0], forceRGB('red'));
  compareColor([1.0, 1.0, 0.0], forceRGB('yellow'));
});

