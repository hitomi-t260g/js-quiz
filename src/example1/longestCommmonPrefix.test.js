import { longestCommonPrefix } from "./longestCommonPrefix";

test("longestCommonPrefixのテスト", () => {
  expect(longestCommonPrefix(["flower", "flow", "flight"])).toEqual("fl");
});
