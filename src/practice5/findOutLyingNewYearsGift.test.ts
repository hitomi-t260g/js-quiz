import { findOutLyingNewYearsGift } from "./findOutLyingNewYearsGift";

test("findOutLyingNewYearsGiftのテスト", () => {
  expect(findOutLyingNewYearsGift(9, 45000)).toEqual([4, 0, 5]);
  expect(findOutLyingNewYearsGift(20, 196000)).toEqual([-1 - 1 - 1]);
});
