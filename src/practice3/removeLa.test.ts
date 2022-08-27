import { removeLa } from "./removeLa";

test("removeLaのテスト", () => {
  expect(removeLa("ららら")).toEqual("");
  expect(removeLa("見られる")).toEqual("見れる");
  expect(removeLa("見ららられる")).toEqual("見れる");
});
