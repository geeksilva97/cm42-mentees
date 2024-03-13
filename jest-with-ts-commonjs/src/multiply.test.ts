import { multiply } from "./multiply"

describe('multiply', () => {
  it('works', () => {
    const result = multiply(2, 4);

    expect(result).toEqual(8);
  })
})
