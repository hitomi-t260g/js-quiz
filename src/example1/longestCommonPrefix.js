/**
 * [問題]
 * 文字列の配列の中から、最も長い共通の接頭辞を求める関数longestCommonPrefixを作ってください。
 * 共通の接頭辞がない場合は、空文字列 "" を返してください。
 * 例えば、"flower", "flight"となら、どちらも"fl"で始まっているので、共通の接頭辞は"fl"です。
 *
 * @param {string[]} strs
 * @return {string}
 */
export const longestCommonPrefix = (strs) => {
  const maxCP = strs.reduce((prev, current) => {
    if (current.length < prev) {
      return current.length;
    }

    return prev;
  }, 200);

  for (let i = maxCP; i !== 0; i--) {
    const prefix = strs[0].slice(0, i);
    const isOK = strs.every((str) => str.startsWith(prefix));
    if (isOK) {
      return prefix;
    }
  }

  return "";
};
