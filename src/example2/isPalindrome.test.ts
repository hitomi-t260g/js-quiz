import { isPalindrome } from "./isPalindrome";

test("isPalindromeのテスト", () => {
  expect(isPalindrome(121)).toEqual(true);
  expect(isPalindrome(123)).toEqual(false);
});
