/**
 * [問題]
 * 整数xが与えられたとき、xがパリンドローム(英語圏における回文的なもの)であればtrueを返し、
 * そうでなければfalseを返す関数isPalindromeを作ってください。
 * パリンドロームとは左右が反転しても同じになる文のことで、例えば、121は回文ですが、123は回文でありません。
 */
export const isPalindrome = (x: number): boolean => {
  if (x < 0) {
    return false;
  }

  const digit = `${x}`.length;
  const isOdd = digit % 2 === 0;
  const halfLength = isOdd ? digit / 2 : (digit - 1) / 2;

  const chars = `${x}`.split("");

  for (let i = 0; i <= halfLength - 1; i++) {
    if (chars[i] !== chars[digit - 1 - i]) {
      return false;
    }
  }

  return true;
};
