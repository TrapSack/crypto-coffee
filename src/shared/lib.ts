/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
export function functionEmmitter<T>(
  emmiter: () => void,
  fn: (..._args: T[]) => any
) {
  return (...args: T[]) => {
    emmiter();

    return fn(...args);
  };
}

export function swapArrayItems<U, T extends U[]>(
  array: T,
  from: keyof T,
  to: keyof T
) {
  const temp = array[to];

  array[to] = array[from];

  array[from] = temp;
}
