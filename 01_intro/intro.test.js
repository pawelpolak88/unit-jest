const { sum, nativeNull } = require("./intro");

describe("Sum function", () => {
  test("Should return sum of two values", () => {
    expect(sum(1, 1)).toBe(2);
    expect(sum(1, 1)).toEqual(2);
  });

  test("Should return value correctly comparing to other", () => {
    // быть больше чем
    expect(sum(2, 2)).toBeGreaterThan(3);
    // проверка равенства
    expect(sum(2, 2)).toBeGreaterThanOrEqual(4);
    // быть меньше чем
    expect(sum(2, 2)).toBeLessThan(6);
    //проверка равенства
    expect(sum(2, 2)).toBeLessThanOrEqual(4);
  });

  test("Should sum 2 float values correctly", () => {
    // близок к
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  });
});

describe("Native null function", () => {
  test("Should return false value null", () => {
    expect(nativeNull()).toBe(null);
    expect(nativeNull()).toBeNull();
    // undefined, null, 0, ''
    expect(nativeNull()).toBeFalsy();
    // определенно
    expect(nativeNull()).toBeDefined();
    // не был противоположным toBeFalsy !undefined, !null, !0, !''
    expect(nativeNull()).not.toBeTruthy();
    expect(nativeNull()).not.toBeUndefined();
  });
});
