// import { styleFn } from 'styled-system'

/**
 * Allows you to pass in a styled-system function and split out
 * in a typesafe manner, the props that match and do not match
 * the styled function.
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const splitProps = <T>(propNames: string[]) => {
  const re = new RegExp(`^(${propNames.join('|')})$`)

  return <U>(props: U): [T, Omit<U, keyof T>] => {
    const leftProps = {} as T
    const rightProps = {} as Omit<U, keyof T>

    for (const key of Object.keys(props)) {
      if (re.test(key)) {
        // @ts-ignore
        leftProps[key] = props[key]
        continue
      }

      // @ts-ignore
      rightProps[key] = props[key]
    }

    return [leftProps, rightProps]
  }
}
