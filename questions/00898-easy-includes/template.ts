type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false

type Includes<T extends readonly any[], U> = T extends [infer A, ...infer B]
  ? Equal<A, U> extends true
    ? true
    : Includes<B, U>
  : false
