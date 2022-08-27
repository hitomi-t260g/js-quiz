import { nabeatsu } from "./nabeatsu";

test("nabeatsuのテスト", () => {
  expect(nabeatsu(3)).toEqual("あほ");
  expect(nabeatsu(7)).toEqual(7);
});
