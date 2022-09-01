/**
 * [問題]
 * 底辺と高さを引数にとり、三角形の面積を返す関数calcTriangleAreaを作ってください。
 * 例えば底辺が4と高さが3であれば、三角形の面積は6です。
 * 平方センチメールなどの単位は無視していいものとします。
 */
export const calcTriangleArea = (base: number, height: number): number => {
  const area = (base * height) / 2;
  return area;
};
