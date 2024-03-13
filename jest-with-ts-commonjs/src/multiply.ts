import { sum } from "./sum";

// 1 * 3  = 3
// 2 * 3 =  (3 + 3)
// 3 * 3 =  (3 + 3 + 3)
// 4 * 3 =  (3 + 3 + 3 + 3)
export const multiply = (n1: number, n2: number) => {
  let total: number = 0;

  for(let i = n1; i > 0; i--) {
    total += n2;
  }

  return total;
};
