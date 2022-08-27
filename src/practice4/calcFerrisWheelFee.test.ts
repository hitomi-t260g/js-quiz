import { calcFerrisWheelFee } from "./calcFerrisWheelFee";

test("calcFerrisWheelFeeのテスト", () => {
  expect(calcFerrisWheelFee(11, 2000)).toEqual(1000);
  expect(calcFerrisWheelFee(100, 2000)).toEqual(2000);
  expect(calcFerrisWheelFee(1, 0)).toEqual(0);
});
